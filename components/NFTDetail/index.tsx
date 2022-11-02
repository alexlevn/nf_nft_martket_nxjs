/* eslint-disable @next/next/no-img-element */
import { formatNumber, getFontColorClassname, getTeam } from 'common/util'
import { INft } from 'components/Card/interface'
import { FC } from 'react'
import Web3 from 'web3'

interface IProps {
  item: INft
  renderAction?: (item: INft) => React.ReactNode
}

const NFTDetail: FC<IProps> = ({ item, renderAction }) => {
  const team = getTeam(item)
  // const image = item.image.replaceAll('https://wcfi.wii.camp/public', '')
  const image =
    '/images/teams/' + team.name.replaceAll(' ', '_').toLowerCase() + '.png'

  return (
    <div className="flex flex-col lg:flex-row py-5">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex-center overflow-hidden h-60">
        <img
          // TODO: path image
          src={image}
          alt=""
          placeholder="blur"
          className="w-52"
        />
      </div>

      {/* INFO */}

      <div className="w-full lg:w-1/2  flex flex-col gap-3 justify-center text-base  font-light p-8">
        <div>
          <span
            className={
              'font-semibold text-lg' +
              ' ' +
              getFontColorClassname(team.tier || 4)
            }
          >
            Tier {team.tier}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-scgray">Team</span>
          <span className="text-white font-medium">{team.name}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-scgray">Rarity</span>
          <span className="text-white font-medium">{team.rarity}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-scgray">ID</span>
          <span className="text-white font-medium">#{item.id.slice(-7)}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-scgray">Price</span>
          <span className="text-white font-medium flex gap-2">
            <img src="/images/busd.svg" alt="" className="w-6 h-6" />
            {item.price ? formatNumber(Web3.utils.fromWei(item.price)) : '0.00'}
          </span>
        </div>
        <div>{renderAction ? renderAction(item) : null}</div>
      </div>
    </div>
  )
}

export default NFTDetail
