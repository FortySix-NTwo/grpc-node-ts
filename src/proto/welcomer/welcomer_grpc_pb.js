// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var welcomer_pb = require('./welcomer_pb.js');

function serialize_welcomer_InputRequest(arg) {
  if (!(arg instanceof welcomer_pb.InputRequest)) {
    throw new Error('Expected argument of type welcomer.InputRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_welcomer_InputRequest(buffer_arg) {
  return welcomer_pb.InputRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_welcomer_OutputResponse(arg) {
  if (!(arg instanceof welcomer_pb.OutputResponse)) {
    throw new Error('Expected argument of type welcomer.OutputResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_welcomer_OutputResponse(buffer_arg) {
  return welcomer_pb.OutputResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WelcomerService = exports.WelcomerService = {
  welcome: {
    path: '/welcomer.Welcomer/welcome',
    requestStream: false,
    responseStream: false,
    requestType: welcomer_pb.InputRequest,
    responseType: welcomer_pb.OutputResponse,
    requestSerialize: serialize_welcomer_InputRequest,
    requestDeserialize: deserialize_welcomer_InputRequest,
    responseSerialize: serialize_welcomer_OutputResponse,
    responseDeserialize: deserialize_welcomer_OutputResponse,
  },
};

exports.WelcomerClient = grpc.makeGenericClientConstructor(WelcomerService);
