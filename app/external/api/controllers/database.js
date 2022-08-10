"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUsers = exports.getUser = exports.createUser = exports.setLogger = void 0;
const level_1 = require("level");
const db = new level_1.Level('scribe', { valueEncoding: 'json' });
const users = db.sublevel('users');
let logger = console;
// TODO: Create decorator for try catch, will be usefull for DRYing code
// https://javascript.plainenglish.io/a-try-catch-decorator-to-stylize-your-code-bdd0202765c8
/**
 * Optionally set diffrent type of logger than default one
 *
 * @param loggerInstance
 */
function setLogger(loggerInstance) {
    logger = loggerInstance;
}
exports.setLogger = setLogger;
;
/**
 * Create new user in database. Return error if username already exist
 *
 * @param username - username wich will be used as user id in this game session
 */
async function createUser(username) {
    const value = {
        username: username,
        stats: {
            heroLevel: 0,
            itemsPower: 0
        }
    };
    try {
        await users.put(username, JSON.stringify(value));
    }
    catch (err) {
        logger.error(err);
    }
}
exports.createUser = createUser;
;
/**
 * Get info about user
 *
 * @param username {string} username of user to get
 */
async function getUser(username) {
    const data = await users.get(username);
    return JSON.parse(data);
}
exports.getUser = getUser;
/**
 * Get list of all users
 */
async function getUsers() {
    var e_1, _a;
    const data = [];
    try {
        for (var _b = __asyncValues(users.iterator()), _c; _c = await _b.next(), !_c.done;) {
            const [_, stats] = _c.value;
            data.push(JSON.parse(stats));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return data;
}
exports.getUsers = getUsers;
/**
 * Update user data
 *
 * @param user {User} - user data
 */
async function updateUser(user) {
    const { username } = user;
    await users.put(username, JSON.stringify(user));
}
exports.updateUser = updateUser;
/**
 * Delete user
 *
 * @param username {string} username of user to delete
 */
async function deleteUser(username) {
    // You can delete other users if you want
    await users.del(username);
}
exports.deleteUser = deleteUser;
