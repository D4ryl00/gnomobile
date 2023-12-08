package land.gno.gobridge;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.File;

import gnolang.gno.gnomobile.Gnomobile;
import gnolang.gno.gnomobile.Bridge;
import gnolang.gno.gnomobile.BridgeConfig;

import io.grpc.Channel;
import android.net.LocalSocketAddress.Namespace;
import android.util.Log;

import io.grpc.StatusRuntimeException;
import land.gno.gnomobile.v1.GnomobileServiceGrpc;
import land.gno.gnomobile.v1.Gnomobiletypes;
import land.gno.udschannel.UdsChannelBuilder;

public class GoBridgeModule extends ReactContextBaseJavaModule {
    private final static String TAG = "GoBridge";
    private final ReactApplicationContext reactContext;
    private final File rootDir;
    private String socketPath;
    private int socketPort;
    private GnomobileServiceGrpc.GnomobileServiceBlockingStub blockingStub;
    private static Bridge bridgeGnomobile = null;

    public GoBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;

        rootDir = new File(new land.gno.rootdir.RootDirModule(reactContext).getRootDir());
    }

    @Override
    public String getName() {
        return "GoBridge";
    }

    //////////////
    // Protocol //
    //////////////

    @ReactMethod
    public void initBridge(Promise promise) {
        try {
            final BridgeConfig config = Gnomobile.newBridgeConfig();
            if (config == null) {
                throw new Exception("");
            }

            config.setRootDir(rootDir.getAbsolutePath());

            // UDS is used by default, use also TCP
            config.setUseTcpListener(true);

            bridgeGnomobile = Gnomobile.newBridge(config);

            socketPath = bridgeGnomobile.getUDSPath();
            socketPort = (int)bridgeGnomobile.getTcpPort();

            Channel channel = UdsChannelBuilder.forPath(socketPath, Namespace.FILESYSTEM).build();
            blockingStub = GnomobileServiceGrpc.newBlockingStub(channel);

            // example call
            Log.i(TAG, String.format("hello() returs: %s", hello("gno")));

            promise.resolve(true);
        } catch (Exception err) {
            promise.reject(err);
        }
    }

    @ReactMethod
    public void closeBridge(Promise promise) {
        try {
            if (bridgeGnomobile != null) {
                bridgeGnomobile.close();
                bridgeGnomobile = null;
            }
            promise.resolve(true);
        } catch (Exception err) {
            promise.reject(err);
        }
    }

    @ReactMethod
    public void getTcpPort(Promise promise) {
        if (bridgeGnomobile == null) {
            promise.reject(new Exception("bridge not init"));
            return ;
        }
        promise.resolve(socketPort);
    }

    @Override
    public void finalize() {
        try {
        } catch (Exception e) {
        }
    }

    public String hello(String name) {
        Gnomobiletypes.HelloRequest request = Gnomobiletypes.HelloRequest.newBuilder().setName(name).build();
        Gnomobiletypes.HelloResponse response;

        try {
            response = blockingStub.hello(request);
        } catch (StatusRuntimeException e) {
            Log.d(TAG, String.format("RPC listKeyInfo failed: {%s}", e.getStatus()));
            return "unknown";
        }

        return response.getGreeting();
    }
}
