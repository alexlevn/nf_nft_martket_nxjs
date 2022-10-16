import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import MatchSchedule from 'components/MatchSchedule'

const Sidebar = () => (
  <div className="w-full lg:w-3/12 py-5  gap-5 flex flex-col">
    <MatchSchedule />
    <div className="flex flex-col gap-5 p-5 lg:p-8  justify-between  bg-pcgray rounded-md">
      <div className="flex flex-col gap-5">
        <p className="text-white font-semibold">My Referral Link</p>
        <p className="text-content">
          Invite friends to join and get up to 25% referral commission.
        </p>
        <div className="flex justify-between text-blue-300">Learn more</div>
      </div>
      <ButtonBorderGradient className="px-4 py-3 text-center">
        <span className="text-base">Invite Friends</span>
      </ButtonBorderGradient>
    </div>
  </div>
)

export default Sidebar
