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
async function userRoutes(fastify, options) {
    fastify.get('/api/v1', async () => {
        return { hello: 'world' };
    });
    fastify.get('/api/v1/user', async () => {
        return await databaseController.getUsers();
    });
    fastify.get('/api/v1/user/:username', async (request, reply) => {
        return await databaseController.getUser(request.params.username);
    });
    fastify.post('/api/v1/user', async (request, reply) => {
        return await databaseController.createUser(request.body.username);
    });
    fastify.put('/api/v1/user', async (request, reply) => {
        await databaseController.updateUser(request.body);
        const users = await databaseController.getUsers();
        sse.writeToAll(JSON.stringify(users));
    });
}
exports.default = userRoutes;
