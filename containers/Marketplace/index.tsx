/* eslint-disable @next/next/no-img-element */
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'

const Marketplace = () => {
  const total = 6969
  return (
    <div className="">
      {/* Total Volume */}
      {/* Filter Form */}
      <div className="flex flex-col lg:flex-row justify-between  items-start gap-5">
        <span className="font-semibold">Items (Total {total})</span>

        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="btn-dropdown">
            Newest
            <img src="/images/arrow_down.svg" alt="" className="h-3 w-3" />
          </div>
          <div className="btn-dropdown">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
          <div className="border-gradient">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
        {/* {Array.from(Array(10).keys()).map((item) => (
          <ShoeDetail_2 key={item} />
        ))} */}

        <ShoeDetail_2 />
        <ShoeDetail />
      </div>

      {/* Load More */}

      <div className="flex-center mt-10">
        <ButtonBorderGradient className="px-10 py-3">
          Load more
        </ButtonBorderGradient>
      </div>
    </div>
  )
}

const ShoeDetail = () => (
  <div className="text-white flex-center flex flex-col bg-scgray rounded-md max-w-sm lg:max-w-xs">
    <ButtonBorderGradient className="flex flex-col gap-5">
      <div className="flex-center">
        <img src="/images/shoes/shoe_brazil.png" alt="" className="h-80 w-80" />
      </div>
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
          <span className="text-scgray">Estimate</span>
        </div>
        <div className="flex flex-col w-1/2 px-5 py-3 gap-1">
          <span className="text-white font-bold flex gap-1 items-center">
            <img src="/images/busd.svg" alt="" className="w-6 h-6" />
            68,000
          </span>
        </div>
      </div>
    </ButtonBorderGradient>
  </div>
)

const ShoeDetail_2 = () => (
  <div className="max-w-sm lg:max-w-xs bg-gray-400 rounded-md">
    <div className="card-nft border-gradient">
      <div className="flex-center">
        <img src="/images/shoes/shoe_brazil.png" alt="" className="h-80 w-80" />
      </div>
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
          <span className="text-scgray">Estimate</span>
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

export default Marketplace
