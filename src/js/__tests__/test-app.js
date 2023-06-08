import Team from "../Team";
import Character from "../Character";

describe("Team", () => {
  let team, bowman, swordsman;

  beforeEach(() => {
    bowman = new Character("Лучник", "Bowman", 50, 1, 40, 10);
    swordsman = new Character("Мечник", "Swordsman", 80, 2, 70, 40);
    team = new Team();
    team.add(bowman);
    team.add(swordsman);
  });

  it("should iterate over the team and return correct characters", () => {
    const iterator = team[Symbol.iterator]();
    expect(iterator.next().value).toEqual(bowman);
    expect(iterator.next().value).toEqual(swordsman);
    expect(iterator.next().done).toBe(true);
  });
});
