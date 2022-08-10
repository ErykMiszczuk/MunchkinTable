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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const static_1 = __importDefault(require("@fastify/static"));
const path_1 = __importDefault(require("path"));
const databaseController = __importStar(require("./controllers/database"));
const fastify_sse_v2_1 = require("fastify-sse-v2");
const node_os_1 = __importDefault(require("node:os"));
// Routes
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const sseRoutes_1 = __importDefault(require("./routes/sseRoutes"));
// Set logger
const fastify = (0, fastify_1.default)({
    logger: true
});
// Set CORS
fastify.register(cors_1.default, {
    origin: '*',
    methods: 'OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: 'Authorization'
});
// Enable SSE
fastify.register(fastify_sse_v2_1.FastifySSEPlugin);
// Set logger
databaseController.setLogger(fastify.log);
// Serve static files
fastify.register(static_1.default, {
    root: path_1.default.join(__dirname, '../public'),
    prefix: "/"
});
// Register routes
fastify.register(userRoutes_1.default);
fastify.register(sseRoutes_1.default);
fastify.setNotFoundHandler(function (req, reply) {
    reply.sendFile('index.html');
});
const start = async () => {
    let networkInterfaces = node_os_1.default.networkInterfaces();
    let networkInterfacesArray = Object.values(networkInterfaces).flat().filter((netInf) => {
        return !netInf.internal;
    });
    try {
        if (networkInterfacesArray) {
            fastify.log.info(networkInterfacesArray);
        }
        await fastify.listen({ host: networkInterfacesArray[0].address, port: 8081 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
