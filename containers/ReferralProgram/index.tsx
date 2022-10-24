/* eslint-disable @next/next/no-img-element */
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { FC } from 'react'

const Referral: FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-5">
      <div className="w-full lg:w-7/12 flex flex-col gap-8">
        <p className="font-bold text-lg leading-10">Referral Program</p>
        <p className="font-normal text-sm text-scgray leading-6	 ">
          Invite friends with referral link and get up to{' '}
          <span className="text-pcgreen">25%</span> commission every time your
          friends mint NFT.
        </p>

        <CommissionTable />
        <ReferralListTable />
      </div>
      <div className="w-full lg:w-5/12">My Referral Link</div>
    </div>
  )
}

const ReferralListTable: FC = () => (
  <div className="rounded-lg bg-pcgray p-5 ">
    <h2 className="text-white font-bold shadow-border pb-8">Referral</h2>

    <div className="flex flex-col gap-5 text-white mt-5 py-5 shadow-border">
      <div className="flex shadow-border pb-5 text-scgray_3 text-xs lg:text-base">
        <div className="referral-cell">Date</div>
        <div className="referral-cell">Wallet Address</div>
        <div className="referral-cell">Earned</div>
      </div>

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="flex flex-wrap justify-between">
          <div className="referral-cell">09/20/22</div>
          <div className="referral-cell hidden lg:block">0x51x...ae69</div>
          <div className="referral-cell flex gap-2">
            <img src="/images/busd.svg" alt="" className="w-5 h-5" />
            25
          </div>
        </div>
      ))}
      <div className="flex shadow-border pb-5 text-xs lg:text-base justify-end text-white gap-2 items-center">
        Total 19 items <div className="box-pagination text-scgray_4">{'<'}</div>
        <ButtonBorderGradient className="w-10 h-10 flex-center text-sm ">
          1
        </ButtonBorderGradient>
        <div className="box-pagination text-white text-sm font-semibold">2</div>
        <div className="box-pagination text-white ">{'>'}</div>
      </div>
    </div>
  </div>
)

const CommissionTable: FC = () => (
  <div className="rounded-lg bg-pcgray p-5 ">
    <h2 className="text-white font-bold shadow-border pb-8">
      Multi-Level Commission
    </h2>
    <div className="flex flex-col gap-5 text-white mt-5 py-5 shadow-border">
      <div className="flex flex-wrap shadow-border pb-5 text-scgray_3">
        <div className="commission-cell ">Level</div>
        <div className="commission-cell">Commission</div>
      </div>

      <div className="flex flex-wrap">
        <div className="commission-cell">1</div>
        <div className="commission-cell">5%</div>
      </div>
      <div className="flex flex-wrap">
        <div className="commission-cell">2</div>
        <div className="commission-cell">5%</div>
      </div>
      <div className="flex flex-wrap">
        <div className="commission-cell">3</div>
        <div className="commission-cell">5%</div>
      </div>
      <div className="flex flex-wrap">
        <div className="commission-cell">4</div>
        <div className="commission-cell">25%</div>
      </div>
    </div>
  </div>
)

export default Referral
