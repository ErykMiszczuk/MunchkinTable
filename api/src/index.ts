import Fastify, { FastifyRequest } from 'fastify';
import FastifyCors from '@fastify/cors';
import FastifyStatic from "@fastify/static";
import path from "path";
import  * as databaseController from './controllers/database';
import { FastifySSEPlugin } from "fastify-sse-v2";
import os from "node:os";

// Routes
import userRoutes from './routes/userRoutes';
import sseRoutes from './routes/sseRoutes';
import { NetworkInterfaceInfo } from 'os';

// Set logger
const fastify = Fastify({
  logger: true
});

// Set CORS
fastify.register(FastifyCors, {
  origin: '*',
  methods: 'OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  exposedHeaders: 'Authorization'
});

// Enable SSE
fastify.register(FastifySSEPlugin);

// Set logger
databaseController.setLogger(fastify.log);

// Serve static files
fastify.register(FastifyStatic, {
  root: path.join(__dirname, '../public'),
  prefix: "/"
})

// Register routes
fastify.register(userRoutes);
fastify.register(sseRoutes);

fastify.setNotFoundHandler(function (req, reply) {
  reply.sendFile('index.html');
})


export const start = async () => {
  let networkInterfaces: Record<string, os.NetworkInterfaceInfo[]> = os.networkInterfaces() as Record<string, os.NetworkInterfaceInfo[]>;
  let networkInterfacesArray: os.NetworkInterfaceInfo[] = Object.values(networkInterfaces).flat().filter((netInf: os.NetworkInterfaceInfo) => {
    return !netInf.internal;
  });

  try {
    if (networkInterfacesArray) {
      fastify.log.info(networkInterfacesArray);
    }
    await fastify.listen({ host: '0.0.0.0', port: 8081 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();