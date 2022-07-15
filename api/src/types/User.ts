import { CharacterStats } from "./CharacterStats";

export interface User {
  username: string,
  stats: CharacterStats
};

export interface NewUser {
  username: string
}