"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const databaseController = __importStar(require("../controllers/database"));
const sse = __importStar(require("../controllers/sse"));
async function sseRoutes(fastify, options) {
    fastify.get('/sse', async (request, reply) => {
        const headers = {
            "Content-Type": 'text/event-stream',
            "Connection": 'keep-alive',
            "Cache-Controll": 'no-cache',
            "Access-Control-Allow-Origin": '*'
        };
        reply.raw.writeHead(200, headers);
        reply.raw.write(JSON.stringify({ txt: new Date }));
        const clientId = request.id;
        sse.createClient(clientId, reply);
        sse.writeToAll(`${clientId} is logged and there is ${sse.getClientsNumber()} other clients logged.`);
        const users = await databaseController.getUsers();
        sse.writeToAll(JSON.stringify(users));
        request.raw.on('close', () => {
            console.log(`${clientId} connection closed`);
            sse.deleteClient(clientId);
        });
    });
}
exports.default = sseRoutes;
