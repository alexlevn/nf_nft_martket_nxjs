/* eslint-disable @next/next/no-img-element */
import { formatNumber, getBorderClassname, getTeam } from 'common/util'
import { FC } from 'react'
import Web3 from 'web3'
import { INft } from './interface'

const CardNft: FC<{ item: INft }> = ({ item }) => {
  const team = getTeam(item)
  const border = getBorderClassname(team.tier)

  // TODO: path image
  const image =
    '/images/teams/' + team.name.replaceAll(' ', '_').toLowerCase() + '.png'

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
            className="w-52"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-wrap w-full text-sm lg:text-xs font-light">
          <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
            <span className="text-scgray">Team</span>
            <span className="text-white">{team.name}</span>
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
              {item.price
                ? formatNumber(Web3.utils.fromWei(item.price))
                : '0.00'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardNft