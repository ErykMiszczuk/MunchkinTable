import { Level } from 'level';

// Types
import { User } from '../types/User';

const db = new Level('scribe', { valueEncoding: 'json' });
const users = db.sublevel('users');

let logger = console;

// TODO: Create decorator for try catch, will be usefull for DRYing code
// https://javascript.plainenglish.io/a-try-catch-decorator-to-stylize-your-code-bdd0202765c8

/**
 * Optionally set diffrent type of logger than default one
 * 
 * @param loggerInstance 
 */
export function setLogger(loggerInstance: any) {
  logger = loggerInstance;
};

/**
 * Create new user in database. Return error if username already exist
 * 
 * @param username - username wich will be used as user id in this game session
 */
export async function createUser(username: string): Promise<any> {
  const value: User = {
    username: username,
    stats: {
      heroLevel: 0,
      itemsPower: 0
    }
  }
  try {
    await users.put(username, JSON.stringify(value));
  } catch (err) {
    logger.error(err);
  }
};

/**
 * Get info about user
 * 
 * @param username {string} username of user to get
 */
export async function getUser(username: string): Promise<User> {
  const data = await users.get(username);
  return JSON.parse(data);
}

/**
 * Get list of all users
 */
export async function getUsers(): Promise<User[]> {
  const data: User[] = [];
  for await (const [_, stats] of users.iterator()) {
    data.push(JSON.parse(stats));
  }
  return data;
}

/**
 * Update user data
 * 
 * @param user {User} - user data
 */
export async function updateUser(user: User) {
  const { username } = user;
  await users.put(username, JSON.stringify(user))
}

/**
 * Delete user
 * 
 * @param username {string} username of user to delete
 */
export async function deleteUser(username: string) {
  // You can delete other users if you want
  await users.del(username)
}
