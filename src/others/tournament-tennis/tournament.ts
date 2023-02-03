class Player {
  name: string;
  skill: number;
  luckyFactor: number;

  constructor(name: string, skill: number, luckyFactor: number) {
    this.name = name;
    this.skill = skill;
    this.luckyFactor = luckyFactor;
  }
}

class Tournament {
  modality: string;
  gender: string;
  players: Player[];

  constructor(modality: string, gender: string) {
    this.modality = modality;
    this.gender = gender;
    this.players = [];
  }
}
