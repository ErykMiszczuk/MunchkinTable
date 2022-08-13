import { User } from "../types/User";

export async function createUser(username: string) {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: `{"username":"${username}"}`
  };

  try {
    await fetch('/api/v1/user', options);
  } catch (err) {
    console.error(err)
  }
}

export async function updateUser(user: User) {
  const options = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  };
  
  try {
    await fetch('/api/v1/user', options)
  } catch (err) {
    console.log(err)
  }
}