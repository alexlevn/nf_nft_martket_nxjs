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
          <div className="font-normal px-5 py-2 border inline-block rounded-md border-scgray_4 text-sm">
            Newest
          </div>
          <div className="font-normal px-5 py-2 border inline-block rounded-md border-scgray_4 text-sm">
            Filter
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
        {Array.from(Array(10).keys()).map((item) => (
          <ShoeDetail key={item} />
        ))}
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
    <ButtonBorderGradient className="cursor-auto">
      <div className="flex-center">
        <img
          src="/images/shoes/shoe_brazil.png"
          alt=""
          className="h-80 w-80 lg:w-96 lg:h-96"
        />
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

export default Marketplace
