import 'dotenv/config';
import * as grpc from 'grpc';

import { protoIndex } from '../proto';
import welcomerHandler from '../handlers/welcomer';

protoIndex();

const port: string | number = process.env.PORT;
const host: string = process.env.HOST;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
  const server: grpc.Server = new grpc.Server();
  server.addService(welcomerHandler.service, welcomerHandler.handler);
  server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err: Error, port: number) => {
    if (err != null) {
      return console.error(err);
    }
    console.log(`gRPC listening on ${port}`);
  });
  server.start();
};

startServer();
