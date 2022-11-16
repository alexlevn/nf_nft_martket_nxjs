/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import { FC } from 'react'
import CommissionTable from './ComissionTable'
import HistoryCommissionTable from './HistoryCommissionTable'
import MyReferralSidebar from './MyReferralSidebar'

const Referral: FC = () => {
  const { wallet } = useWeb3()
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-5">
      <div className="w-full lg:w-7/12 flex flex-col gap-8">
        <p className="font-bold text-lg leading-10">Referral Program</p>
        <p className="font-normal text-sm text-scgray leading-6	 ">
          Invite friends with referral link and get up to{' '}
          <span className="text-pcgreen">50%</span> commission every time your
          friends mint NFT.
        </p>

        <CommissionTable />
        <HistoryCommissionTable />
      </div>
      <MyReferralSidebar address={wallet?.address} />
    </div>
  )
}

export default Referral
