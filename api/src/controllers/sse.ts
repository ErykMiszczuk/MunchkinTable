import { FastifyReply } from "fastify";

interface SSEClient {
  id: any,
  response: FastifyReply
}

let clients: SSEClient[] = []

export function createClient(id: any, response: FastifyReply): void {
  const newClient: SSEClient = {
    id,
    response
  };

  clients.push(newClient);
};

export function deleteClient(id: any): void {
  clients = clients.filter(client => client.id !== id);
};

export function writeToAll(message: string): void {
  clients.forEach(client => {
    client.response.raw.write(`id: ${client.id}\n`);
    client.response.raw.write(`data: ${message}\n\n`);
  })
};

export function getClientsNumber(): number {
  return clients.length;
}

export function getClientsList(): SSEClient[] {
  return [...clients];
}