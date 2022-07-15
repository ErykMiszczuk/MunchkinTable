import Fastify, { FastifyRequest } from 'fastify';
import FastifyCors from '@fastify/cors';
import  * as databaseController from './controllers/database';
import { FastifySSEPlugin } from "fastify-sse-v2";

// Types
import { User, NewUser } from './types/User';

// Routes
import userRoutes from './routes/userRoutes';
import sseRoutes from './routes/sseRoutes';

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

// Register routes
fastify.register(userRoutes);
fastify.register(sseRoutes);


const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();