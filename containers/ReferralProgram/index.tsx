/* eslint-disable @next/next/no-img-element */
import { notification } from 'antd'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import { FC, useState } from 'react'

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
      <MyReferralLink />
    </div>
  )
}

const MyReferralLink = () => {
  const [referralLink, _] = useState('https://wcfi.io/ref=2ckni9ajas01')
  const notificationCopy = () => {
    navigator.clipboard.writeText(referralLink)
    notification.success({
      message: 'Copy success!',
      style: {
        background: '#191D24',
        borderRadius: '12px',
      },
      duration: 0.8,
    })
  }

  return (
    <div className="w-full lg:w-5/12 flex flex-col gap-5">
      <div className="bg-pcgray p-5 rounded-lg flex flex-col gap-5">
        <h3 className="text-white">My Referral Link</h3>
        <div
          className="flex  rounded-md justify-between items-center border border-scgray_4 px-5 py-3
         cursor-pointer hover:opacity-80 text-white "
          onClick={notificationCopy}
        >
          <span>{referralLink.slice(0, 15)}...</span>

          <img src="/images/icon_copy.svg" alt="" className="w-5 h-5" />
        </div>
      </div>

      <div className="bg-pcgray p-5 rounded-lg">
        <div>
          <h3 className="text-scgray_3 font-bold">Total Friends</h3>
          <p className="flex items-center gap-2 mt-3 text-white font-bold">
            <img src="/images/group_users.svg" alt="" className="w-6 h-6" /> 30
          </p>
        </div>

        <div className="flex flex-col gap-5 flex-wrap items-center">
          <div className="w-full flex flex-col lg:flex-row mt-8 justify-between gap-5">
            <div className="flex flex-col">
              <h3 className="text-scgray_3 font-bold">Total Earned</h3>
              <p className="flex items-center gap-2 mt-3 text-white font-bold">
                <img src="/images/busd.svg" alt="" className="w-6 h-6" /> 688.00
              </p>
            </div>

            <div className="flex flex-col justify-center items-center rounded-lg bg-pcmodal w-full lg:w-2/3 p-3 text-scgray_3">
              <span>Available to Withdraw on</span>
              <span className="font-bold">25/12/2022</span>
            </div>
          </div>

          <ButtonGradient className="w-full py-2 text-lg">
            Withdraw
          </ButtonGradient>
        </div>
      </div>
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
      <div className="mt-5 py-5 shadow-border flex-center gap-5">
        <img src="/images/no_data.svg" alt="" className="w-20 h-20" />
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
        <div className="box-pagination text-white">{'>'}</div>
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
