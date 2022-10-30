export interface ITeamInfo {
  id: number
  tier: number
  tokenType: number
  name: string
  fifaCode: string
  group: string
  rarity: number
  totalMinted: number
  totalPool: number
  // TODO:
  price?: number
}

