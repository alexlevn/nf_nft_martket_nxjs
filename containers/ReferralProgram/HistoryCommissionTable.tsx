import axios from 'axios'
import useWeb3 from 'common/hooks/useWeb3'
import { getResponseData } from 'common/util'
import { FC, useEffect, useState } from 'react'

/* eslint-disable @next/next/no-img-element */
const HistoryCommissionTable: FC = () => {
  const { wallet } = useWeb3()
  const [commissionHistory, setCommissionHistory] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      if (wallet?.address) {
        const params = {
          address: wallet.address,
        }
        try {
          const res = await axios.get(
            'http://wcfi.wii.camp/v1.0/refs/commission-histories',
            { params },
          )
          const data = getResponseData(res)
          setCommissionHistory(data)
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    }

    fetchData()
  }, [wallet?.address])
  return (
    <div className="rounded-lg bg-pcgray p-5 ">
      <h2 className="text-white font-bold shadow-border pb-8">Referral</h2>

      <div className="flex flex-col gap-5 text-white mt-5 py-5 shadow-border">
        <div className="flex shadow-border pb-5 text-scgray_3 text-xs lg:text-base">
          <div className="referral-cell">Date</div>
          <div className="referral-cell">Wallet Address</div>
          <div className="referral-cell">Earned</div>
        </div>
        {commissionHistory.length === 0 ? (
          <div className="mt-5 py-5 shadow-border flex-center gap-5">
            <img src="/images/no_data.svg" alt="" className="w-20 h-20" />
          </div>
        ) : (
          commissionHistory.map((item) => (
            <div key={item} className="flex flex-wrap justify-between">
              <div className="referral-cell">{item.date}</div>
              <div className="referral-cell hidden lg:block">
                {item.address.slice(0, 6) + '...' + item.address.slice(-3)}
              </div>
              <div className="referral-cell flex gap-2">
                <img src="/images/busd.svg" alt="" className="w-5 h-5" />
                {item.earned}
              </div>
            </div>
          ))
        )}

        {/* DETAIL */}
        {/* {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="flex flex-wrap justify-between">
            <div className="referral-cell">09/20/22</div>
            <div className="referral-cell hidden lg:block">0x51x...ae69</div>
            <div className="referral-cell flex gap-2">
              <img src="/images/busd.svg" alt="" className="w-5 h-5" />
              25
            </div>
          </div>
        ))} */}

        {/* FOOTER */}
        {/* <div className="flex shadow-border pb-5 text-xs lg:text-base justify-end text-white gap-2 items-center">
          Total 19 items{' '}
          <div className="box-pagination text-scgray_4">{'<'}</div>
          <ButtonBorderGradient className="w-10 h-10 flex-center text-sm ">
            1
          </ButtonBorderGradient>
          <div className="box-pagination text-white text-sm font-semibold">
            2
          </div>
          <div className="box-pagination text-white">{'>'}</div>
        </div> */}
      </div>
    </div>
  )
}

export default HistoryCommissionTable
