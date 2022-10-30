/* eslint-disable @next/next/no-img-element */
import { getFontColorClassname } from 'common/util'
import { ITeamInfo } from './interface'

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

export default TierDetail
