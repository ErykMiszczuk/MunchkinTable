import Fastify, { FastifyRequest } from 'fastify';
import FastifyCors from '@fastify/cors';
import FastifyStatic from "@fastify/static";
import path from "path";
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


const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();