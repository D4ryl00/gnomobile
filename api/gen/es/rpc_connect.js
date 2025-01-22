// @generated by protoc-gen-connect-es v1.4.0
// @generated from file rpc.proto (package land.gno.gnonative.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ActivateAccountRequest, ActivateAccountResponse, AddressFromBech32Request, AddressFromBech32Response, AddressFromMnemonicRequest, AddressFromMnemonicResponse, AddressToBech32Request, AddressToBech32Response, BroadcastTxCommitRequest, BroadcastTxCommitResponse, CallRequest, CallResponse, CreateAccountRequest, CreateAccountResponse, DeleteAccountRequest, DeleteAccountResponse, EstimateGasRequest, EstimateGasResponse, GenerateRecoveryPhraseRequest, GenerateRecoveryPhraseResponse, GetActivatedAccountRequest, GetActivatedAccountResponse, GetChainIDRequest, GetChainIDResponse, GetKeyInfoByAddressRequest, GetKeyInfoByAddressResponse, GetKeyInfoByNameOrAddressRequest, GetKeyInfoByNameOrAddressResponse, GetKeyInfoByNameRequest, GetKeyInfoByNameResponse, GetRemoteRequest, GetRemoteResponse, HasKeyByAddressRequest, HasKeyByAddressResponse, HasKeyByNameOrAddressRequest, HasKeyByNameOrAddressResponse, HasKeyByNameRequest, HasKeyByNameResponse, HelloRequest, HelloResponse, HelloStreamRequest, HelloStreamResponse, ListKeyInfoRequest, ListKeyInfoResponse, MakeTxResponse, QEvalRequest, QEvalResponse, QueryAccountRequest, QueryAccountResponse, QueryRequest, QueryResponse, RenderRequest, RenderResponse, RotatePasswordRequest, RotatePasswordResponse, RunRequest, RunResponse, SendRequest, SendResponse, SetChainIDRequest, SetChainIDResponse, SetPasswordRequest, SetPasswordResponse, SetRemoteRequest, SetRemoteResponse, SignTxRequest, SignTxResponse } from "./gnonativetypes_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * GnoNativeService is the service to interact with the Gno blockchain
 *
 * @generated from service land.gno.gnonative.v1.GnoNativeService
 */
export const GnoNativeService = {
  typeName: "land.gno.gnonative.v1.GnoNativeService",
  methods: {
    /**
     * Set the connection address for the remote node. If you don't call this,
     * the default is "127.0.0.1:26657"
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.SetRemote
     */
    setRemote: {
      name: "SetRemote",
      I: SetRemoteRequest,
      O: SetRemoteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the connection address for the remote node. The response is either
     * the initial default, or the value which was set with SetRemote
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.GetRemote
     */
    getRemote: {
      name: "GetRemote",
      I: GetRemoteRequest,
      O: GetRemoteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Set the chain ID for the remote node. If you don't call this, the default
     * is "dev"
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.SetChainID
     */
    setChainID: {
      name: "SetChainID",
      I: SetChainIDRequest,
      O: SetChainIDResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the chain ID for the remote node. The response is either
     * the initial default, or the value which was set with SetChainID
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.GetChainID
     */
    getChainID: {
      name: "GetChainID",
      I: GetChainIDRequest,
      O: GetChainIDResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Generate a recovery phrase of BIP39 mnemonic words using entropy from the
     * crypto library random number generator. This can be used as the mnemonic in
     * CreateAccount.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.GenerateRecoveryPhrase
     */
    generateRecoveryPhrase: {
      name: "GenerateRecoveryPhrase",
      I: GenerateRecoveryPhraseRequest,
      O: GenerateRecoveryPhraseResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the information for all keys in the keybase
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.ListKeyInfo
     */
    listKeyInfo: {
      name: "ListKeyInfo",
      I: ListKeyInfoRequest,
      O: ListKeyInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Check for the key in the keybase with the given name.
     * In the response, set has true if the keybase has the key.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.HasKeyByName
     */
    hasKeyByName: {
      name: "HasKeyByName",
      I: HasKeyByNameRequest,
      O: HasKeyByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Check for the key in the keybase with the given address.
     * In the response, set has true if the keybase has the key.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.HasKeyByAddress
     */
    hasKeyByAddress: {
      name: "HasKeyByAddress",
      I: HasKeyByAddressRequest,
      O: HasKeyByAddressResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Check for the key in the keybase with the given name or bech32 string address.
     * In the response, set has true if the keybase has the key.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.HasKeyByNameOrAddress
     */
    hasKeyByNameOrAddress: {
      name: "HasKeyByNameOrAddress",
      I: HasKeyByNameOrAddressRequest,
      O: HasKeyByNameOrAddressResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the information for the key in the keybase with the given name.
     * If the key doesn't exist, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrCryptoKeyNotFound.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.GetKeyInfoByName
     */
    getKeyInfoByName: {
      name: "GetKeyInfoByName",
      I: GetKeyInfoByNameRequest,
      O: GetKeyInfoByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the information for the key in the keybase with the given address.
     * If the key doesn't exist, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrCryptoKeyNotFound.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.GetKeyInfoByAddress
     */
    getKeyInfoByAddress: {
      name: "GetKeyInfoByAddress",
      I: GetKeyInfoByAddressRequest,
      O: GetKeyInfoByAddressResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the information for the key in the keybase with the given name or bech32 string address.
     * If the key doesn't exist, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrCryptoKeyNotFound.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.GetKeyInfoByNameOrAddress
     */
    getKeyInfoByNameOrAddress: {
      name: "GetKeyInfoByNameOrAddress",
      I: GetKeyInfoByNameOrAddressRequest,
      O: GetKeyInfoByNameOrAddressResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create a new account in the keybase using the name and password specified by SetAccount.
     * If an account with the same name already exists in the keybase,
     * this replaces it. (If you don't want to replace it, then it's your responsibility
     * to use GetKeyInfoByName to check if it exists before calling this.)
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.CreateAccount
     */
    createAccount: {
      name: "CreateAccount",
      I: CreateAccountRequest,
      O: CreateAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Find the account in the keybase with the given name_or_bech32 and activate it. If the response has_password is
     * false, then you should call SetPassword before using a method which needs it.
     * If the account is already activated, return its info.
     * If the key doesn't exist, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrCryptoKeyNotFound.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.ActivateAccount
     */
    activateAccount: {
      name: "ActivateAccount",
      I: ActivateAccountRequest,
      O: ActivateAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Set the password for the account in the keybase with the given address.
     * If there is no activated account with the given address, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrNoActiveAccount.
     * If the password is wrong, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrDecryptionFailed.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.SetPassword
     */
    setPassword: {
      name: "SetPassword",
      I: SetPasswordRequest,
      O: SetPasswordResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Rotate the password of a key to a new password for the accounts in the keybase with the given addresses.
     * Before calling this, you must call SetPassword with the current password for each account.
     * If there is an error, then roll back all accounts to the current password.
     * If there is no activated account with the given address, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrNoActiveAccount.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.RotatePassword
     */
    rotatePassword: {
      name: "RotatePassword",
      I: RotatePasswordRequest,
      O: RotatePasswordResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetActivatedAccount gets the info of the account by address which has been activated by ActivateAccount.
     * If there the given address is not specified, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrInvalidAddress.
     * If there is no activated account with the given address, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrNoActiveAccount.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.GetActivatedAccount
     */
    getActivatedAccount: {
      name: "GetActivatedAccount",
      I: GetActivatedAccountRequest,
      O: GetActivatedAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * QueryAccount retrieves account information from the blockchain for a given
     * address.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.QueryAccount
     */
    queryAccount: {
      name: "QueryAccount",
      I: QueryAccountRequest,
      O: QueryAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteAccount deletes the account with the given name, using the password
     * to ensure access. However, if skip_password is true, then ignore the
     * password.
     * If the account doesn't exist, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrCryptoKeyNotFound.
     * If the password is wrong, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrDecryptionFailed.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.DeleteAccount
     */
    deleteAccount: {
      name: "DeleteAccount",
      I: DeleteAccountRequest,
      O: DeleteAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Make an ABCI query to the remote node.
     * If the request path is unrecognized, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrUnknownRequest.
     * If the request data has a package path that is unrecognized, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrInvalidPkgPath.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.Query
     */
    query: {
      name: "Query",
      I: QueryRequest,
      O: QueryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Render calls the Render function for package_path with optional args. The
     * package path should include the prefix like "gno.land/". This is similar to
     * using a browser URL <nodeURL>/<pkgPath>:<args> where <pkgPath> doesn't have
     * the prefix like "gno.land/".
     * If the request package_path is unrecognized, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrInvalidPkgPath.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.Render
     */
    render: {
      name: "Render",
      I: RenderRequest,
      O: RenderResponse,
      kind: MethodKind.Unary,
    },
    /**
     * QEval evaluates the given expression with the realm code at package_path.
     * The package path should include the prefix like "gno.land/". The expression
     * is usually a function call like "GetBoardIDFromName(\"testboard\")". The
     * return value is a typed expression like
     * "(1 gno.land/r/demo/boards.BoardID)\n(true bool)".
     * If the request package_path is unrecognized, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrInvalidPkgPath.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.QEval
     */
    qEval: {
      name: "QEval",
      I: QEvalRequest,
      O: QEvalResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Call a specific realm function. Sign the transaction with the given caller_address.
     * If there is no activated account with the given caller_address, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrNoActiveAccount.
     * If the password is wrong, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrDecryptionFailed.
     * If the path of a realm function call is unrecognized, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrUnknownRequest.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.Call
     */
    call: {
      name: "Call",
      I: CallRequest,
      O: CallResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Send currency from the account with the given caller_address to an account on the blockchain.
     * If there is no activated account with the given caller_address, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrNoActiveAccount.
     * If the password is wrong, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrDecryptionFailed.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.Send
     */
    send: {
      name: "Send",
      I: SendRequest,
      O: SendResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Temporarily load the code in package on the blockchain and run main() which can
     * call realm functions and use println() to output to the "console". Sign the transaction with the given caller_address.
     * This returns the "console" output.
     * If there is no activated account with the given caller_address, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrNoActiveAccount.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.Run
     */
    run: {
      name: "Run",
      I: RunRequest,
      O: RunResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Make an unsigned transaction to call a specific realm function.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.MakeCallTx
     */
    makeCallTx: {
      name: "MakeCallTx",
      I: CallRequest,
      O: MakeTxResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Make an unsigned transaction to send currency to an account on the blockchain.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.MakeSendTx
     */
    makeSendTx: {
      name: "MakeSendTx",
      I: SendRequest,
      O: MakeTxResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Make an unsigned transaction to temporarily load the code in package on the blockchain and run main().
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.MakeRunTx
     */
    makeRunTx: {
      name: "MakeRunTx",
      I: RunRequest,
      O: MakeTxResponse,
      kind: MethodKind.Unary,
    },
    /**
     * EstimateGas returns the least amount of gas required for the transaction to go through on the chain (minimum gas wanted).
     * The estimation process assumes the transaction is properly signed.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.EstimateGas
     */
    estimateGas: {
      name: "EstimateGas",
      I: EstimateGasRequest,
      O: EstimateGasResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Sign the transaction using the account with the given address.
     * If there is no activated account with the given address, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrNoActiveAccount.
     * If the password is wrong, return [ErrCode](#land.gno.gnonative.v1.ErrCode).ErrDecryptionFailed.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.SignTx
     */
    signTx: {
      name: "SignTx",
      I: SignTxRequest,
      O: SignTxResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Broadcast the signed transaction to the blockchain configured in GetRemote and return a stream result.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.BroadcastTxCommit
     */
    broadcastTxCommit: {
      name: "BroadcastTxCommit",
      I: BroadcastTxCommitRequest,
      O: BroadcastTxCommitResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Convert a byte array address to a bech32 string address.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.AddressToBech32
     */
    addressToBech32: {
      name: "AddressToBech32",
      I: AddressToBech32Request,
      O: AddressToBech32Response,
      kind: MethodKind.Unary,
    },
    /**
     * Convert a bech32 string address to a byte array address.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.AddressFromBech32
     */
    addressFromBech32: {
      name: "AddressFromBech32",
      I: AddressFromBech32Request,
      O: AddressFromBech32Response,
      kind: MethodKind.Unary,
    },
    /**
     * Convert a mnemonic (as in CreateAccount) to a byte array address.
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.AddressFromMnemonic
     */
    addressFromMnemonic: {
      name: "AddressFromMnemonic",
      I: AddressFromMnemonicRequest,
      O: AddressFromMnemonicResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Hello is for debug purposes
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.Hello
     */
    hello: {
      name: "Hello",
      I: HelloRequest,
      O: HelloResponse,
      kind: MethodKind.Unary,
    },
    /**
     * HelloStream is for debug purposes
     *
     * @generated from rpc land.gno.gnonative.v1.GnoNativeService.HelloStream
     */
    helloStream: {
      name: "HelloStream",
      I: HelloStreamRequest,
      O: HelloStreamResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
};

