/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { FC } from 'react'
import MintNFT from 'components/MintNFT'

const Home: FC = () => {
  return (
    <div className="text-xl font-light  bg-dark min-h-screen p-0 flex flex-col gap-5 ">
      {/* REWARD */}

      <div className="flex flex-col lg:flex-row justify-around rounded-xl  lg:gap-40 gap-2 bg-red-500 p-30">
      <div className=" flex flex-col gap-2 justify-center">
          <div className="text-content">Total Reward</div>
          <div className="text-xl lg:text-3xl font-semibold">$8.064.000</div>
          <Image
            src="/images/btn_view_contract.svg"
            alt=""
            height={24}
            width={120}
            className="cursor-pointer mx-auto "
          />
          <div className="bg-red-100">hello</div>
        </div>

        <div className="flex flex-col  gap-2">
          <div className="text-content">Participant</div>
          <div className="text-xl lg:text-3xl font-semibold">40.320</div>
        </div>
      </div>

      {/* HERO IMAGES */}
      <div className="flex flex-col lg:flex-row  justify-between bg-pcgray rounded-md">
        <img
          src="/images/hero_football_2022.png"
          alt=""
          className="rounded-md"
        />
        <MintNFT />
      </div>
      <div className='text-red-500'>Hello</div>
    </div>

    
  )
}

export default Home
