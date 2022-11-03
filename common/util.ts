import { AxiosResponse } from "axios"
import { INft } from "components/Card/interface"
import { ALL_TEAMS } from "common/constants"
import { ITeam } from "components/TiersList/interface"

export const getTeam: (nft: INft) => ITeam = (nft) => {
  const DEFAULT = {
    id: 30,
    tier: 1,
    tokenType: '30',
    name: 'NO TEAM',
    flag: 'public/images/teams/vertical/30.png',
    fifaCode: 'IRN',
    group: 'B',
    rarity: '9.32',
  }
  const tokenType = nft.tokenType
  const arr = ALL_TEAMS.filter((t) => t.tokenType === tokenType)
  return arr[0] || DEFAULT
}

export const getResponseData = <T>(response: AxiosResponse<{
  payload: any
}>) => {
  return response.data.payload
}

export const getFontColorClassname = (tier: number) => {
  const arrayColors = [
    'text-gradient',
    'text-pcblue',
    'text-pcyellow',
    'text-pcgray_2',
  ]
  return arrayColors[tier - 1]
}

export const getBorderClassname = (tier: number) => {
  const arrayBorders = [
    'border-gradient',
    'border border-pcblue',
    'border border-pcyellow',
    'border border-pcgray_2',
  ]
  return arrayBorders[tier - 1]
}

const expo = (x: string, f: number) => {
  return Number.parseFloat(x).toExponential(f)
}

export const formatNumber = (num: string | null) => {
  return num ? expo(num, 2) : '0.00'
}