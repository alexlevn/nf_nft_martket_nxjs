/* eslint-disable @next/next/no-img-element */

import { Carousel } from 'antd'
import axios from 'axios'
import { getResponseData } from 'common/util'
import { useEffect, useState } from 'react'
import arrTiers from './data.json'
interface TeamRarityInfo {
  teamName: string
  imageName: string
  minted: number
  percent: string
  price: number
}

interface ITeamInfo {
  id: number
  tier: number
  tokenType: number
  name: string
  fifaCode: string
  group: string
  rarity: number
  totalMinted: number
  totalPool: number
}

// {
//   id: 1,
//   tier: 1,
//   tokenType: 1,
//   name: 'Brazil',
//   fifaCode: 'BRA',
//   group: 'G',
//   rarity: 0.08,
//   totalMinted: 0,
//   totalPool: 0,
// },

//
const TeamRarity: React.FC<{ info: TeamRarityInfo }> = ({ info }) => (
  <div className="w-full flex justify-between items-center">
    {/* TEAM */}
    <div className="flex gap-3 items-center text-sm">
      <img src={`/images/flags/${info.imageName}`} alt="" className="w-5" />
      <div className="flex flex-col">
        <span className="text-white font-semibold">{info.teamName}</span>
        <span className="text-gray-400" style={{ fontSize: 11 }}>
          Minted {info.minted}
        </span>
      </div>
    </div>

    {/* INFO */}
    <div className="text-xs text-right">
      <span className="text-white">0.08%</span>
      <br />
      <span className="text-content">= $96.000</span>
    </div>
  </div>
)

const TierDetail: React.FC<{
  dataSource: TeamRarityInfo[]
  title?: string
}> = ({ dataSource, title }) => {
  return (
    <div className="w-full bg-pcgray rounded-md p-5 gap-5 ">
      <div className="w-full flex justify-between">
        <span className="font-semibold text-gradient lg:text-pcyellow">
          {title || 'Tier'}
        </span>
        <span className="text-content">Rarity</span>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {dataSource.map((item, index) => (
          <TeamRarity key={index} info={item} />
        ))}
      </div>
    </div>
  )
}

const TiersList = () => {
  const [arrTeams, setArrTeams] = useState<any>()
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://wcfi.wii.camp/v1.0/teams')
      const data: ITeamInfo[] = getResponseData(res)
      console.log('data = ', data)
      console.log(
        'arr 1 ',
        data.filter((item) => item.tier === 1),
      )
    }

    fetchData()
  }, [])
  return (
    <>
      <div className="block lg:hidden">
        <Carousel>
          {arrTiers.map((item, index) => {
            return (
              <TierDetail
                key={index}
                dataSource={item?.list}
                title={'Tier ' + (index + 1)}
              />
            )
          })}
        </Carousel>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:flex-nowrap">
        <TierDetail title="Tier 1" dataSource={arrTiers[0]?.list || []} />
        <TierDetail title="Tier 2" dataSource={arrTiers[1]?.list || []} />
      </div>
      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:flex-nowrap">
        <TierDetail title="Tier 3" dataSource={arrTiers[2]?.list || []} />
        <TierDetail title="Tier 4" dataSource={arrTiers[3]?.list || []} />
      </div>
    </>
  )
}

export default TiersList

const resTmp =
  // 20221029105957
  // https://wcfi.wii.camp/v1.0/teams

  {
    code: 200,
    payload: [
      {
        id: 1,
        tier: 1,
        tokenType: 1,
        name: 'Brazil',
        fifaCode: 'BRA',
        group: 'G',
        rarity: 0.08,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 2,
        tier: 1,
        tokenType: 2,
        name: 'France',
        fifaCode: 'FRA',
        group: 'D',
        rarity: 0.1,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 3,
        tier: 1,
        tokenType: 3,
        name: 'England',
        fifaCode: 'ENG',
        group: 'B',
        rarity: 0.11,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 4,
        tier: 1,
        tokenType: 4,
        name: 'Spain',
        fifaCode: 'ESP',
        group: 'E',
        rarity: 0.14,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 5,
        tier: 1,
        tokenType: 5,
        name: 'Germany',
        fifaCode: 'GER',
        group: 'E',
        rarity: 0.19,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 6,
        tier: 1,
        tokenType: 6,
        name: 'Argentina',
        fifaCode: 'ARG',
        group: 'C',
        rarity: 0.19,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 7,
        tier: 1,
        tokenType: 7,
        name: 'Belgium',
        fifaCode: 'BEL',
        group: 'F',
        rarity: 0.22,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 8,
        tier: 1,
        tokenType: 8,
        name: 'Portugal',
        fifaCode: 'POR',
        group: 'H',
        rarity: 0.22,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 9,
        tier: 2,
        tokenType: 9,
        name: 'Nederland',
        fifaCode: 'NL',
        group: 'A',
        rarity: 0.26,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 10,
        tier: 2,
        tokenType: 10,
        name: 'Denmark',
        fifaCode: 'DEN',
        group: 'D',
        rarity: 0.52,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 11,
        tier: 2,
        tokenType: 11,
        name: 'Croatia',
        fifaCode: 'CRO',
        group: 'F',
        rarity: 0.65,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 12,
        tier: 2,
        tokenType: 12,
        name: 'Uruguay',
        fifaCode: 'URU',
        group: 'H',
        rarity: 0.93,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 13,
        tier: 2,
        tokenType: 13,
        name: 'Poland',
        fifaCode: 'POL',
        group: 'C',
        rarity: 1.21,
        totalMinted: '1',
        totalPool: 60,
      },
      {
        id: 14,
        tier: 2,
        tokenType: 14,
        name: 'Senegal',
        fifaCode: 'SN',
        group: 'A',
        rarity: 1.21,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 15,
        tier: 2,
        tokenType: 15,
        name: 'America',
        fifaCode: 'USA',
        group: 'B',
        rarity: 1.49,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 16,
        tier: 2,
        tokenType: 16,
        name: 'Serbia',
        fifaCode: 'SRB',
        group: 'G',
        rarity: 1.49,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 17,
        tier: 3,
        tokenType: 17,
        name: 'Switzerland',
        fifaCode: 'SUI',
        group: 'G',
        rarity: 1.49,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 18,
        tier: 3,
        tokenType: 18,
        name: 'Mexico',
        fifaCode: 'MEX',
        group: 'C',
        rarity: 1.86,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 19,
        tier: 3,
        tokenType: 19,
        name: 'Wales',
        fifaCode: 'WAL',
        group: 'B',
        rarity: 1.86,
        totalMinted: '2',
        totalPool: 120,
      },
      {
        id: 20,
        tier: 3,
        tokenType: 20,
        name: 'Ghana',
        fifaCode: 'GHA',
        group: 'H',
        rarity: 2.8,
        totalMinted: '1',
        totalPool: 60,
      },
      {
        id: 21,
        tier: 3,
        tokenType: 21,
        name: 'Ecuador',
        fifaCode: 'ECU',
        group: 'A',
        rarity: 2.8,
        totalMinted: '3',
        totalPool: 180,
      },
      {
        id: 22,
        tier: 3,
        tokenType: 22,
        name: 'Morocco',
        fifaCode: 'MAR',
        group: 'F',
        rarity: 3.73,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 23,
        tier: 3,
        tokenType: 23,
        name: 'Cameroon',
        fifaCode: 'CMR',
        group: 'G',
        rarity: 4.66,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 24,
        tier: 3,
        tokenType: 24,
        name: 'Canada',
        fifaCode: 'CAN',
        group: 'F',
        rarity: 4.66,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 25,
        tier: 4,
        tokenType: 25,
        name: 'Japan',
        fifaCode: 'JPN',
        group: 'E',
        rarity: 4.66,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 26,
        tier: 4,
        tokenType: 26,
        name: 'Qatar',
        fifaCode: 'QAT',
        group: 'A',
        rarity: 4.66,
        totalMinted: 0,
        totalPool: 0,
      },
      {
        id: 27,
        tier: 4,
        tokenType: 27,
        name: 'Tunisia',
        fifaCode: 'TUN',
        group: 'D',
        rarity: 5.59,
        totalMinted: '3',
        totalPool: 180,
      },
      {
        id: 28,
        tier: 4,
        tokenType: 28,
        name: 'South Korea',
        fifaCode: 'KOR',
        group: 'H',
        rarity: 7.46,
        totalMinted: '1',
        totalPool: 60,
      },
      {
        id: 29,
        tier: 4,
        tokenType: 29,
        name: 'Australia',
        fifaCode: 'AUS',
        group: 'D',
        rarity: 7.46,
        totalMinted: '2',
        totalPool: 120,
      },
      {
        id: 30,
        tier: 4,
        tokenType: 30,
        name: 'Iran',
        fifaCode: 'IRN',
        group: 'B',
        rarity: 9.32,
        totalMinted: '4',
        totalPool: 240,
      },
      {
        id: 31,
        tier: 4,
        tokenType: 31,
        name: 'Saudi Arabia',
        fifaCode: 'KSA',
        group: 'C',
        rarity: 9.32,
        totalMinted: '5',
        totalPool: 300,
      },
      {
        id: 32,
        tier: 4,
        tokenType: 32,
        name: 'Costa Rica',
        fifaCode: 'CRC',
        group: 'E',
        rarity: 18.64,
        totalMinted: 0,
        totalPool: 0,
      },
    ],
  }
