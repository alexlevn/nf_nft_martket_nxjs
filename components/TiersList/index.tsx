/* eslint-disable @next/next/no-img-element */

import { Carousel } from 'antd'
import arrTiers from './data.json'
interface TeamRarityInfo {
  teamName: string
  imageName: string
  minted: number
  percent: string
  price: number
}

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
        <span className="font-semibold text_gradient lg:text-pcyellow">
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

const TiersList = () => (
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

export default TiersList
