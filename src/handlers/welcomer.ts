import * as grpc from 'grpc';

import { InputRequest, OutputResponse } from '../proto/welcomer/welcomer_pb';
import { WelcomerService, IWelcomerServer } from '../proto/welcomer/welcomer_grpc_pb';

class WelcomerHandler implements IWelcomerServer {
  /**
   * Welcomer Service
   * @param call
   * @param callback
   */
  welcome = (call: grpc.ServerUnaryCall<InputRequest>, callback: grpc.sendUnaryData<OutputResponse>): void => {
    const reply: OutputResponse = new OutputResponse();
    reply.setMessage(`Hello, ${call.request.getName()}`);
    callback(null, reply);
  };
}

export default {
  service: WelcomerService,
  handler: new WelcomerHandler(),
};
