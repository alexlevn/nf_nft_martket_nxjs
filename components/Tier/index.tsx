/* eslint-disable @next/next/no-img-element */
interface TeamRarityInfo {
  teamName: string
  imageName: string
  minted: number
  percent: string
  price: number
}

const teamA: TeamRarityInfo = {
  teamName: 'Quatar',
  imageName: 'qatar.png',
  minted: 33,
  percent: '0.08%',
  price: 96000,
}

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

const Tier = () => (
  <div className="w-full bg-pcgray rounded-md p-5 gap-5 ">
    <div className="w-full flex justify-between">
      <span className="font-semibold text-pcyellow">Tier 1</span>
      <span className="text-content">Rarity</span>
    </div>
    <div className="flex flex-col gap-3 mt-5">
      <TeamRarity info={teamA} />
      <TeamRarity info={teamA} />
      <TeamRarity info={teamA} />
      <TeamRarity info={teamA} />

      <TeamRarity info={teamA} />
      <TeamRarity info={teamA} />
      <TeamRarity info={teamA} />
      <TeamRarity info={teamA} />

      
    </div>
  </div>
)

export default Tier
