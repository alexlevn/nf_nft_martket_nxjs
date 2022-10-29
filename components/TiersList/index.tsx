/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'antd'
import axios from 'axios'
import { getResponseData } from 'common/util'
import { useEffect, useState } from 'react'
import arrTiers from './data.json'
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
  // TODO:
  price?: number
}

const getFlagImageUrl = (teamName: string) => {
  return '/images/flags/' + teamName.replaceAll(' ', '_').toLowerCase() + '.png'
}
const TeamRarity: React.FC<{
  info: ITeamInfo
}> = ({ info }) => (
  <div className="w-full flex justify-between items-center">
    {/* TEAM */}
    <div className="flex gap-3 items-center text-sm">
      <img
        // TODO: ITeamInfo need imagePath
        src={getFlagImageUrl(info.name)}
        alt=""
        className="w-5"
      />
      <div className="flex flex-col">
        <span className="text-white font-semibold">{info.name}</span>
        <span className="text-gray-400" style={{ fontSize: 11 }}>
          Minted {info.totalMinted}
        </span>
      </div>
    </div>

    {/* INFO */}
    <div className="text-xs text-right">
      <span className="text-white">{info.rarity}%</span>
      <br />
      <span className="text-content">= ${info.price || 'null'}</span>
    </div>
  </div>
)

const getFontColorClassname = (tier: number) => {
  const arrayColors = [
    'text-gradient',
    'text-pcblue',
    'text-pcyellow',
    'text-pcgray_2',
  ]
  return arrayColors[tier - 1]
}

const TierDetail: React.FC<{
  dataSource: ITeamInfo[]
  title?: string
  tier?: number
}> = ({ dataSource, title, tier }) => {
  return (
    <div className="w-full bg-pcgray rounded-md p-5 gap-5 ">
      <div className="w-full flex justify-between">
        <span
          className={'font-semibold' + ' ' + getFontColorClassname(tier || 4)}
        >
          {title || 'Tier' + ' ' + (tier || 0)}
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
  const [arrTeams, setArrTeams] = useState<ITeamInfo[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://wcfi.wii.camp/v1.0/teams')
      const data: ITeamInfo[] = getResponseData(res)

      setArrTeams(data)
    }

    fetchData()
  }, [])
  return (
    <>
      <div className="block lg:hidden">
        <Carousel>
          {[1, 2, 3, 4].map((tier, index) => {
            return (
              <TierDetail
                key={index}
                dataSource={arrTeams.filter((item) => item.tier === tier)}
                tier={tier}
              />
            )
          })}
        </Carousel>
      </div>

      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:flex-nowrap">
        <TierDetail
          tier={1}
          dataSource={arrTeams.filter((item) => item.tier === 1)}
        />
        <TierDetail
          tier={2}
          dataSource={arrTeams.filter((item) => item.tier === 2)}
        />
      </div>
      <div className="hidden lg:flex lg:flex-row lg:gap-5 lg:flex-nowrap">
        <TierDetail
          tier={3}
          dataSource={arrTeams.filter((item) => item.tier === 3)}
        />
        <TierDetail
          tier={4}
          dataSource={arrTeams.filter((item) => item.tier === 4)}
        />
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
    ],
  }
