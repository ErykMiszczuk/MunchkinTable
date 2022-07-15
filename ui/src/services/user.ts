import { User } from "../types/User";

export async function createUser(username: string) {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: `{"username":"${username}"}`
  };

  try {
    await fetch('http://127.0.0.1:3000/api/v1/user', options);
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
    await fetch('http://127.0.0.1:3000/api/v1/user', options)
  } catch (err) {
    console.log(err)
  }
}