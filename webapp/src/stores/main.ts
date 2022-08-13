import { defineStore } from "pinia";
import * as userService from "../services/user";
import { StoreCharacterStats } from "../types/CharacterStats";
import { User } from "../types/User";

export const useStore = defineStore('main', {
  state: (): StoreCharacterStats => {
    return {
      name: "",
      itemsPower: 0,
      heroLevel: 0,
    }
  },
  getters: {
    fullPower: (state) => state.itemsPower + state.heroLevel,
  },
  actions: {
    login(username: string) {
      this.name = username;
      userService.createUser(username);
    },
    incrementItemsPower() {
      this.itemsPower++;
      const patch: User = {
        username: this.name,
        stats: {
          heroLevel: this.heroLevel,
          itemsPower: this.itemsPower
        }
      }
      userService.updateUser(patch);
    },
    decrementItemsPower() {
      this.itemsPower--;
      const patch: User = {
        username: this.name,
        stats: {
          heroLevel: this.heroLevel,
          itemsPower: this.itemsPower
        }
      }
      userService.updateUser(patch);
    },
    incrementHeroLevel() {
      this.heroLevel++;
      const patch: User = {
        username: this.name,
        stats: {
          heroLevel: this.heroLevel,
          itemsPower: this.itemsPower
        }
      }
      userService.updateUser(patch);
    },
    decrementHeroLevel() {
      this.heroLevel--;
      const patch: User = {
        username: this.name,
        stats: {
          heroLevel: this.heroLevel,
          itemsPower: this.itemsPower
        }
      }
      userService.updateUser(patch);
    }
  },
  persist: true
})