/* eslint-disable @next/next/no-img-element */
import { notification } from 'antd'
import axios from 'axios'
import useWeb3 from 'common/hooks/useWeb3'
import { getResponseData } from 'common/util'
import { ButtonGradient } from 'components/ButtonGradient'
import { FC, useEffect, useState } from 'react'
import { IRefferal } from './interface'

const MyReferralSidebar: FC<{ address?: string }> = ({ address }) => {
  const { wallet } = useWeb3()
  const [data, setData] = useState<IRefferal | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (wallet?.address) {
        const params = { address: wallet.address }

        try {
          const res = await axios.get('/refs/commission', { params })
          setData(getResponseData(res))
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    }

    fetchData()
  }, [wallet?.address])

  const referralLink = `https://wcfi.io/?ref=${address}`

  const notificationCopy = () => {
    navigator.clipboard.writeText(referralLink)
    notification.success({
      message: 'Link Copied!',
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
            <img src="/images/group_users.svg" alt="" className="w-6 h-6" />{' '}
            {data?.totalRefs || 0}
          </p>
        </div>

        <div className="flex flex-col gap-5 flex-wrap items-center">
          <div className="w-full flex flex-col lg:flex-row mt-8 justify-between gap-5">
            <div className="flex flex-col">
              <h3 className="text-scgray_3 font-bold">Total Earned</h3>
              <p className="flex items-center gap-2 mt-3 text-white font-bold">
                <img src="/images/busd.svg" alt="" className="w-6 h-6" />{' '}
                {(data && parseFloat(data.commission?.toString()).toFixed(2)) ||
                  0}
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

export default MyReferralSidebar
