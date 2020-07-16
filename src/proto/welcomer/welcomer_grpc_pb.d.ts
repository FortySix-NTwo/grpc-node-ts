// package: welcomer
// file: welcomer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as welcomer_pb from "./welcomer_pb";

interface IWelcomerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    welcome: IWelcomerService_Iwelcome;
}

interface IWelcomerService_Iwelcome extends grpc.MethodDefinition<welcomer_pb.InputRequest, welcomer_pb.OutputResponse> {
    path: string; // "/welcomer.Welcomer/welcome"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<welcomer_pb.InputRequest>;
    requestDeserialize: grpc.deserialize<welcomer_pb.InputRequest>;
    responseSerialize: grpc.serialize<welcomer_pb.OutputResponse>;
    responseDeserialize: grpc.deserialize<welcomer_pb.OutputResponse>;
}

export const WelcomerService: IWelcomerService;

export interface IWelcomerServer {
    welcome: grpc.handleUnaryCall<welcomer_pb.InputRequest, welcomer_pb.OutputResponse>;
}

export interface IWelcomerClient {
    welcome(request: welcomer_pb.InputRequest, callback: (error: grpc.ServiceError | null, response: welcomer_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    welcome(request: welcomer_pb.InputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: welcomer_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    welcome(request: welcomer_pb.InputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: welcomer_pb.OutputResponse) => void): grpc.ClientUnaryCall;
}

export class WelcomerClient extends grpc.Client implements IWelcomerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public welcome(request: welcomer_pb.InputRequest, callback: (error: grpc.ServiceError | null, response: welcomer_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    public welcome(request: welcomer_pb.InputRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: welcomer_pb.OutputResponse) => void): grpc.ClientUnaryCall;
    public welcome(request: welcomer_pb.InputRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: welcomer_pb.OutputResponse) => void): grpc.ClientUnaryCall;
}
