/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'

const CardNft: FC<{ tier?: number }> = ({ tier }) => {
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
export default CardNft
