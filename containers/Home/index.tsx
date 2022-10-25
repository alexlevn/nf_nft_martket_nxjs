/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { FC, useEffect } from 'react'
import useWeb3 from 'common/hooks/useWeb3'
import MintNFT from 'components/MintNFT'
import TiersList from 'components/TiersList'
import Sidebar from 'components/Layout/Sidebar'
import { Layout } from 'antd'

const Home: FC = () => {
  return (
    <>
      <div className="w-1/12 p-5 hidden lg:block" />
      <Layout.Content className="w-full lg:w-8/12 p-5 lg:block">
        <MiddleComponent />
      </Layout.Content>
      <Sidebar />
    </>
  )
}

const MiddleComponent: FC = () => {
  const { totalReward, getTotalReward } = useWeb3()

  useEffect(() => {
    getTotalReward()
  },[getTotalReward])

  return (
    <div className="text-xl font-light bg-dark p-0 flex flex-col gap-5">
      {/* REWARD */}
      <div className="bg-pcgray rounded-xl flex flex-col lg:flex-row justify-around p-10 lg:gap-40 gap-2 ">
        <div className="flex flex-col gap-1 justify-center items-start text-left">
          <div className="text-content">Total Reward</div>
          <div className="text-xl lg:text-3xl font-semibold">{`$${Math.floor(Number(totalReward) * 100) / 100}`}</div>
          <Image
            src="/images/btn_view_contract.svg"
            alt=""
            height={20}
            width={120}
            className="cursor-pointer mx-auto 100 "
          />
        </div>
        <div className="flex flex-col  gap-1">
          <div className="text-content">Participant</div>
          <div className="text-xl lg:text-3xl font-semibold">40.320</div>
        </div>
      </div>

      {/* HERO IMAGES */}
      <div className="flex flex-col lg:flex-row  justify-between bg-pcgray rounded-md">
        <div className="w-full lg:w-7/12 flex items-center">
          <img
            src="/images/hero_football_2022.png"
            alt=""
            className="rounded-md w-full"
          />
        </div>
        <MintNFT />
      </div>

      {/* TIERS */}
      <TiersList />
    </div>
  )
}

export default Home
