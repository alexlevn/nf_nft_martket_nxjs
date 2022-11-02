/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import MintNFT from 'components/MintNFT'
import TiersList from 'components/TiersList'
import Sidebar from 'components/Layout/Sidebar'
import { Layout } from 'antd'
import Link from 'next/link'
import { LINK_HREF, WC_NFT_ADDRESS } from 'constants/index'
import axios from 'axios'
import { getResponseData } from 'common/util'

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

interface ISummary {
  totalReward: number
  participants: number
}

const MiddleComponent: FC = () => {
  const [summary, setSummary] = useState<ISummary | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/summary')
        const data = getResponseData(res as any)

        setSummary(data)
      } catch (e) {
        console.log('Catch Error: ', e)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="text-xl font-light bg-dark p-0 flex flex-col gap-5">
      {/* REWARD */}

      <div className="bg-pcgray rounded-xl flex flex-col lg:flex-row justify-around p-10 lg:gap-40 gap-2 ">
        <div className="flex flex-col gap-1 justify-center items-start text-left">
          <div className="text-content">Total Reward</div>
          <div className="text-xl lg:text-3xl font-semibold">
            $
            {summary
              ? Math.floor(Number(summary.totalReward) * 100) / 100
              : '0.00'}
          </div>
          <Link href={`${LINK_HREF}${WC_NFT_ADDRESS}`} passHref>
            <a target="_blank">
              <Image
                src="/images/btn_view_contract.svg"
                alt=""
                height={20}
                width={120}
                className="cursor-pointer mx-auto 100 "
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col  gap-1">
          <div className="text-content">Participant</div>
          <div className="text-xl lg:text-3xl font-semibold">
            {summary ? summary.participants : '0'}
          </div>
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
