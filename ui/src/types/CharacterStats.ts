export interface CharacterStats {
  itemsPower: number;
  heroLevel: number;
}

export interface StoreCharacterStats extends CharacterStats{
  name: string;
}