// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: gnomobiletypes.proto

package gnomobiletypes

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	GnomobileService_SetRemote_FullMethodName         = "/gomobile.v1.GnomobileService/SetRemote"
	GnomobileService_SetKeyBaseFromDir_FullMethodName = "/gomobile.v1.GnomobileService/SetKeyBaseFromDir"
	GnomobileService_SetAccount_FullMethodName        = "/gomobile.v1.GnomobileService/SetAccount"
	GnomobileService_GetKeyCount_FullMethodName       = "/gomobile.v1.GnomobileService/GetKeyCount"
	GnomobileService_CreateAccount_FullMethodName     = "/gomobile.v1.GnomobileService/CreateAccount"
	GnomobileService_Call_FullMethodName              = "/gomobile.v1.GnomobileService/Call"
)

// GnomobileServiceClient is the client API for GnomobileService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GnomobileServiceClient interface {
	// Set the connection info for the remote node. If you don't call this, the default is
	// remote = "127.0.0.1:26657" and chainID = "dev"
	SetRemote(ctx context.Context, in *SetRemote_Request, opts ...grpc.CallOption) (*SetRemote_Reply, error)
	// NewKeyBaseFromDir initializes a keybase in the given subdirectory of the app's root directory.
	// If the keybase already exists then this opens it, otherwise this creates a new empty keybase.
	SetKeyBaseFromDir(ctx context.Context, in *SetKeyBaseFromDir_Request, opts ...grpc.CallOption) (*SetKeyBaseFromDir_Reply, error)
	// Set the name and password for the account in the keybase, used for later operations
	SetAccount(ctx context.Context, in *SetAccount_Request, opts ...grpc.CallOption) (*SetAccount_Reply, error)
	// Get the count of keys in the keybase that was specified by SetKeyBaseFromDir
	GetKeyCount(ctx context.Context, in *GetKeyCount_Request, opts ...grpc.CallOption) (*GetKeyCount_Reply, error)
	// Create a new account the keybase that was specified by SetKeyBaseFromDir, using
	// the name an password specified by SetAccount
	CreateAccount(ctx context.Context, in *CreateAccount_Request, opts ...grpc.CallOption) (*CreateAccount_Reply, error)
	// Call a specific realm function.
	Call(ctx context.Context, in *Call_Request, opts ...grpc.CallOption) (*Call_Reply, error)
}

type gnomobileServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGnomobileServiceClient(cc grpc.ClientConnInterface) GnomobileServiceClient {
	return &gnomobileServiceClient{cc}
}

func (c *gnomobileServiceClient) SetRemote(ctx context.Context, in *SetRemote_Request, opts ...grpc.CallOption) (*SetRemote_Reply, error) {
	out := new(SetRemote_Reply)
	err := c.cc.Invoke(ctx, GnomobileService_SetRemote_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gnomobileServiceClient) SetKeyBaseFromDir(ctx context.Context, in *SetKeyBaseFromDir_Request, opts ...grpc.CallOption) (*SetKeyBaseFromDir_Reply, error) {
	out := new(SetKeyBaseFromDir_Reply)
	err := c.cc.Invoke(ctx, GnomobileService_SetKeyBaseFromDir_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gnomobileServiceClient) SetAccount(ctx context.Context, in *SetAccount_Request, opts ...grpc.CallOption) (*SetAccount_Reply, error) {
	out := new(SetAccount_Reply)
	err := c.cc.Invoke(ctx, GnomobileService_SetAccount_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gnomobileServiceClient) GetKeyCount(ctx context.Context, in *GetKeyCount_Request, opts ...grpc.CallOption) (*GetKeyCount_Reply, error) {
	out := new(GetKeyCount_Reply)
	err := c.cc.Invoke(ctx, GnomobileService_GetKeyCount_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gnomobileServiceClient) CreateAccount(ctx context.Context, in *CreateAccount_Request, opts ...grpc.CallOption) (*CreateAccount_Reply, error) {
	out := new(CreateAccount_Reply)
	err := c.cc.Invoke(ctx, GnomobileService_CreateAccount_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gnomobileServiceClient) Call(ctx context.Context, in *Call_Request, opts ...grpc.CallOption) (*Call_Reply, error) {
	out := new(Call_Reply)
	err := c.cc.Invoke(ctx, GnomobileService_Call_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GnomobileServiceServer is the server API for GnomobileService service.
// All implementations must embed UnimplementedGnomobileServiceServer
// for forward compatibility
type GnomobileServiceServer interface {
	// Set the connection info for the remote node. If you don't call this, the default is
	// remote = "127.0.0.1:26657" and chainID = "dev"
	SetRemote(context.Context, *SetRemote_Request) (*SetRemote_Reply, error)
	// NewKeyBaseFromDir initializes a keybase in the given subdirectory of the app's root directory.
	// If the keybase already exists then this opens it, otherwise this creates a new empty keybase.
	SetKeyBaseFromDir(context.Context, *SetKeyBaseFromDir_Request) (*SetKeyBaseFromDir_Reply, error)
	// Set the name and password for the account in the keybase, used for later operations
	SetAccount(context.Context, *SetAccount_Request) (*SetAccount_Reply, error)
	// Get the count of keys in the keybase that was specified by SetKeyBaseFromDir
	GetKeyCount(context.Context, *GetKeyCount_Request) (*GetKeyCount_Reply, error)
	// Create a new account the keybase that was specified by SetKeyBaseFromDir, using
	// the name an password specified by SetAccount
	CreateAccount(context.Context, *CreateAccount_Request) (*CreateAccount_Reply, error)
	// Call a specific realm function.
	Call(context.Context, *Call_Request) (*Call_Reply, error)
	mustEmbedUnimplementedGnomobileServiceServer()
}

// UnimplementedGnomobileServiceServer must be embedded to have forward compatible implementations.
type UnimplementedGnomobileServiceServer struct {
}

func (UnimplementedGnomobileServiceServer) SetRemote(context.Context, *SetRemote_Request) (*SetRemote_Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetRemote not implemented")
}
func (UnimplementedGnomobileServiceServer) SetKeyBaseFromDir(context.Context, *SetKeyBaseFromDir_Request) (*SetKeyBaseFromDir_Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetKeyBaseFromDir not implemented")
}
func (UnimplementedGnomobileServiceServer) SetAccount(context.Context, *SetAccount_Request) (*SetAccount_Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetAccount not implemented")
}
func (UnimplementedGnomobileServiceServer) GetKeyCount(context.Context, *GetKeyCount_Request) (*GetKeyCount_Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetKeyCount not implemented")
}
func (UnimplementedGnomobileServiceServer) CreateAccount(context.Context, *CreateAccount_Request) (*CreateAccount_Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAccount not implemented")
}
func (UnimplementedGnomobileServiceServer) Call(context.Context, *Call_Request) (*Call_Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Call not implemented")
}
func (UnimplementedGnomobileServiceServer) mustEmbedUnimplementedGnomobileServiceServer() {}

// UnsafeGnomobileServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GnomobileServiceServer will
// result in compilation errors.
type UnsafeGnomobileServiceServer interface {
	mustEmbedUnimplementedGnomobileServiceServer()
}

func RegisterGnomobileServiceServer(s grpc.ServiceRegistrar, srv GnomobileServiceServer) {
	s.RegisterService(&GnomobileService_ServiceDesc, srv)
}

func _GnomobileService_SetRemote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetRemote_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GnomobileServiceServer).SetRemote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GnomobileService_SetRemote_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GnomobileServiceServer).SetRemote(ctx, req.(*SetRemote_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _GnomobileService_SetKeyBaseFromDir_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetKeyBaseFromDir_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GnomobileServiceServer).SetKeyBaseFromDir(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GnomobileService_SetKeyBaseFromDir_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GnomobileServiceServer).SetKeyBaseFromDir(ctx, req.(*SetKeyBaseFromDir_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _GnomobileService_SetAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetAccount_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GnomobileServiceServer).SetAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GnomobileService_SetAccount_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GnomobileServiceServer).SetAccount(ctx, req.(*SetAccount_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _GnomobileService_GetKeyCount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetKeyCount_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GnomobileServiceServer).GetKeyCount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GnomobileService_GetKeyCount_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GnomobileServiceServer).GetKeyCount(ctx, req.(*GetKeyCount_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _GnomobileService_CreateAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateAccount_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GnomobileServiceServer).CreateAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GnomobileService_CreateAccount_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GnomobileServiceServer).CreateAccount(ctx, req.(*CreateAccount_Request))
	}
	return interceptor(ctx, in, info, handler)
}

func _GnomobileService_Call_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Call_Request)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GnomobileServiceServer).Call(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: GnomobileService_Call_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GnomobileServiceServer).Call(ctx, req.(*Call_Request))
	}
	return interceptor(ctx, in, info, handler)
}

// GnomobileService_ServiceDesc is the grpc.ServiceDesc for GnomobileService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GnomobileService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "gomobile.v1.GnomobileService",
	HandlerType: (*GnomobileServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SetRemote",
			Handler:    _GnomobileService_SetRemote_Handler,
		},
		{
			MethodName: "SetKeyBaseFromDir",
			Handler:    _GnomobileService_SetKeyBaseFromDir_Handler,
		},
		{
			MethodName: "SetAccount",
			Handler:    _GnomobileService_SetAccount_Handler,
		},
		{
			MethodName: "GetKeyCount",
			Handler:    _GnomobileService_GetKeyCount_Handler,
		},
		{
			MethodName: "CreateAccount",
			Handler:    _GnomobileService_CreateAccount_Handler,
		},
		{
			MethodName: "Call",
			Handler:    _GnomobileService_Call_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "gnomobiletypes.proto",
}
