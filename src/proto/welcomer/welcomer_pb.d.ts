// package: welcomer
// file: welcomer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class InputRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): InputRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InputRequest): InputRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InputRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InputRequest;
    static deserializeBinaryFromReader(message: InputRequest, reader: jspb.BinaryReader): InputRequest;
}

export namespace InputRequest {
    export type AsObject = {
        name: string,
    }
}

export class OutputResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): OutputResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutputResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OutputResponse): OutputResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutputResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutputResponse;
    static deserializeBinaryFromReader(message: OutputResponse, reader: jspb.BinaryReader): OutputResponse;
}

export namespace OutputResponse {
    export type AsObject = {
        message: string,
    }
}
