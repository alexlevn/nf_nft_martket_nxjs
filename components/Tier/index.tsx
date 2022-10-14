/* eslint-disable @next/next/no-img-element */
interface TeamInfo {
  imageName: string
  teamName: string
  minted: number
}

const teamA: TeamInfo = {
  imageName: 'qatar.png',
  teamName: 'Quatar',
  minted: 33,
}

const TeamMintedInfo: React.FC<{ teamInfo: TeamInfo }> = ({ teamInfo }) => (
  <div className="flex gap-3 items-center text-sm">
    <img src={`/images/flags/${teamInfo.imageName}`} alt="" className="w-5" />
    <div className="flex flex-col">
      <span className="text-white font-semibold">{teamInfo.teamName}</span>
      <span className="text-gray-400" style={{fontSize: 11}}>Minted {teamInfo.minted}</span>
    </div>
  </div>
)

const Tier = () => (
  <div className="w-full bg-pcgray rounded-md p-5 gap-5 ">
    <div className="w-full flex justify-between">
      <span className="font-semibold text-pcyellow">Tier 1</span>
      <span className="text-content" >Rarity</span>
    </div>
    <div className="w-full flex justify-between items-center mt-5 ">
      <TeamMintedInfo teamInfo={teamA} />
      <div className="text-xs text-right">
        <span className="text-white">0.08%</span><br/>
        <span className="text-content">= $96.000</span>
      </div>
    </div>
  </div>
)

export default Tier
