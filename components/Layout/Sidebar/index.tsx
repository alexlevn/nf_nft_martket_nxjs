/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { notification } from 'antd'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import MatchSchedule from 'components/MatchSchedule'

const Sidebar = () => {
  const { wallet } = useWeb3();
  
  const [referralLink, setReferralLink] = useState<string>('')
  const [isShowLinkInvite, setIsShowLinkInvite] = useState<boolean>(false)

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
  
  useEffect(() => {
    setReferralLink(`${window.location.origin}?ref=${wallet?.address}`);
  }, [wallet?.address])

  return (
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

        {isShowLinkInvite 
          ? <div
            className="flex  rounded-md justify-between items-center border border-scgray_4 px-5 py-3
            cursor-pointer hover:opacity-80 text-white "
            onClick={notificationCopy}
          >
            <span>{referralLink.slice(0, 15)}...</span>

            <img src="/images/icon_copy.svg" alt="" className="w-5 h-5" />
          </div> 
          : <ButtonBorderGradient onClick={() => setIsShowLinkInvite(true)} className="px-4 py-3 text-center">
              <span className="text-base">Invite Friends</span>
            </ButtonBorderGradient>}
      </div>
    </div>
  )
}

export default Sidebar
