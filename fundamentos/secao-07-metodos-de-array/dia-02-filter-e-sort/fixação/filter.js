const people = [
  { name: 'João', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 20 },
  { name: 'Ana', age: 35 },
];

const olderThen30 = people.filter(({ age }) => age > 30);


const players = [
  { name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
  { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
  { name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
  { name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
  { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
];

const filterHighPlayers = (players) => {
  return players.filter(({ height }) => height >= 200);
};
