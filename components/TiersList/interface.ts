export interface ITeam {
  id: number,
  tier: number,
  tokenType: string,
  name: string,
  flag: string,
  fifaCode: string,
  group: string,
  rarity: string
}

// new data
// {
//   id: 1,
//   tier: 1,
//   tokenType: 1,
//   name: 'Brazil',
//   flag: 'public/images/teams/vertical/1.png',
//   fifaCode: 'BRA',
//   group: 'G',
//   rarity: 0.08,
// },


// OLD DATA
// {
//   "teamName": "Brazil", => name
//   "imageName": "brazil.png", => image
//   "minted": 84, (minted ) => count ...
//   "percent": "0.08%",=> rarity ..
//   "price": 96000
// },