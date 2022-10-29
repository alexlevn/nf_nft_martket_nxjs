/* eslint-disable @next/next/no-img-element */
import { ALL_TEAMS } from 'components/TiersList/constants'
import { ITeam } from 'components/TiersList/interface'
import { FC } from 'react'
export interface INft {
  id: string
  tokenId: string
  tokenAddress: string
  tokenType: string
  image: string
  owner: string
  isOnSale: false
  listingId: null
  price: null
  creator: string
  createdAt: string
}

const getTeam: (nft: INft) => ITeam = (nft) => {
  const tokenType = nft.tokenType
  const arr = ALL_TEAMS.filter((t) => t.tokenType === tokenType)
  return arr[0] || ALL_TEAMS[31] // DEFAUL = 31
}

const getBorderClassname = (tier: number) => {
  const arrayBorders = [
    'border-gradient',
    'border border-pcblue',
    'border border-pcyellow',
    'border border-pcgray_2',
  ]
  return arrayBorders[tier - 1]
}

const CardNft: FC<{ item: INft }> = ({ item }) => {
  const team = getTeam(item)
  const border = getBorderClassname(team.tier)

  // TODO: path image
  const image = item.image.replaceAll('https://wcfi.wii.camp/public', '')

  return (
    <div className="max-w-sm lg:max-w-xs bg-gray-400 rounded-md">
      <div className={'card-nft' + ' ' + border}>
        {/* IMAGE */}
        <div className="flex-center overflow-hidden h-80">
          <img
            // TODO: path image
            // src={item.image}
            src={image}
            alt=""
            placeholder="blur"
            className=""
          />
        </div>

        {/* INFO */}
        <div className="flex flex-wrap w-full text-sm lg:text-xs font-light">
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-scgray">Team</span>
            <span className="text-white">{team.name}</span>
            {/* <span className="text-white">{team.name} - {team.tier}</span> */}
          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-scgray">Rarity</span>
            <span className="text-white">{team.rarity}%</span>
          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-scgray">Price</span>
          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-white font-bold flex gap-1 items-center">
              <img src="/images/busd.svg" alt="" className="w-6 h-6" />
              {item.price || 'null'}
              {/* 68,000 */}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardNft

// MOCKUP DATA ----------------------
export const CardNftMookup: FC<{ tier?: number; item: any }> = ({
  tier,
  item,
}) => {
  const fakeData = true

  const arrayBorders = [
    'border-gradient',
    'border border-pcblue',
    'border border-pcyellow',
    'border border-pcgray_2',
  ]

  const border =
    tier === undefined || arrayBorders[tier] === undefined
      ? arrayBorders[3]
      : arrayBorders[tier]

  console.log('item = ', item)

  return (
    <div className="max-w-sm lg:max-w-xs bg-gray-400 rounded-md">
      <div className={'card-nft' + ' ' + border}>
        {/* IMAGE */}
        <div className="flex-center">
          <img
            src="/images/shoes/shoe_brazil.png"
            alt=""
            className="h-80 w-80"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-wrap w-full text-sm font-light">
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-scgray">Team</span>
            <span className="text-white">Brazil</span>
          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-scgray">Rarity</span>
            <span className="text-white">0,08%</span>
          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-scgray">Price</span>
          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-white font-bold flex gap-1 items-center">
              <img src="/images/busd.svg" alt="" className="w-6 h-6" />
              68,000
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
