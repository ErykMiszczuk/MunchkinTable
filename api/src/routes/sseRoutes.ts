import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import * as sse from "../controllers/sse";

export default async function sseRoutes(fastify: FastifyInstance, options: Object) {
  fastify.get('/sse', async (request: FastifyRequest, reply: FastifyReply) => {
    const headers = {
      "Content-Type": 'text/event-stream',
      "Connection": 'keep-alive',
      "Cache-Controll": 'no-cache',
      "Access-Control-Allow-Origin": '*'
    };

    reply.raw.writeHead(200, headers);
    reply.raw.write(JSON.stringify({txt: new Date}));

    const clientId = request.id;

    sse.createClient(clientId, reply);

    sse.writeToAll(`${clientId} is logged and there is ${sse.getClientsNumber()} other clients logged.`)

    request.raw.on('close', () => {
      console.log(`${clientId} connection closed`);

      sse.deleteClient(clientId);
    })
  })
}

