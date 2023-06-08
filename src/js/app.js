import Team from "./Team";
import Character from "./Character";

const bowman = new Character("Лучник", "Bowman", 50, 1, 40, 10);
const swordsman = new Character("Мечник", "Swordsman", 80, 2, 70, 40);

const team = new Team();
team.add(bowman);
team.add(swordsman);

for (const character of team) {
  console.log(character);
}

export default { bowman, swordsman };
