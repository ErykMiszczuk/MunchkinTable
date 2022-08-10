"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientsList = exports.getClientsNumber = exports.writeToAll = exports.deleteClient = exports.createClient = void 0;
let clients = [];
function createClient(id, response) {
    const newClient = {
        id,
        response
    };
    clients.push(newClient);
}
exports.createClient = createClient;
;
function deleteClient(id) {
    clients = clients.filter(client => client.id !== id);
}
exports.deleteClient = deleteClient;
;
function writeToAll(message) {
    clients.forEach(client => {
        client.response.raw.write(`id: ${client.id}\n`);
        client.response.raw.write(`data: ${message}\n\n`);
    });
}
exports.writeToAll = writeToAll;
;
function getClientsNumber() {
    return clients.length;
}
exports.getClientsNumber = getClientsNumber;
function getClientsList() {
    return [...clients];
}
exports.getClientsList = getClientsList;
