import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import * as databaseController from '../controllers/database';
import * as sse from "../controllers/sse";

// Types
import { NewUser, User } from "../types/User";

export default async function userRoutes(fastify: FastifyInstance, options: Object) {
  fastify.get('/api/v1', async () => {
    return { hello: 'world' };
  })

  fastify.get('/api/v1/user', async () => {
    return await databaseController.getUsers();
  })

  fastify.get('/api/v1/user/:username', async (request: FastifyRequest<{Params: {username: string}}>, reply: FastifyReply) => {
    return await databaseController.getUser(request.params.username);
  })

  fastify.post('/api/v1/user', async (request: FastifyRequest<{Body: NewUser}>, reply: FastifyReply) => {
    return await databaseController.createUser(request.body.username);
  })

  fastify.put('/api/v1/user', async (request: FastifyRequest<{Body: User}>, reply: FastifyReply) => {
    await databaseController.updateUser(request.body);
    const users = await databaseController.getUsers();
    sse.writeToAll(JSON.stringify(users));
  })
}