/* eslint-disable @next/next/no-img-element */
import { Modal, notification } from 'antd'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import { MARKET_ADDRESS } from 'constants/index'
import { FC, useCallback, useState } from 'react'

const ButtonUnListNft: FC<{
  listingId: string
  callbackCloseModal?: () => void
  callbackCancelListingNftSuccess: (listingId: string) => void
}> = ({ listingId, callbackCloseModal, callbackCancelListingNftSuccess }) => {
  const {
    connected,
    connect,
    allowanceMK,
    approve,
    cancelSellToken,
  } = useWeb3()

  const [loadingApprove, setLoadingApprove] = useState(false)
  const [loadingCancelSell, setLoadingCancelSell] = useState(false)

  const callbackApprove = useCallback(() => {
    setLoadingApprove(false)
  }, [])

  const renderSpinner = () => (
    <Modal
      width={300}
      footer={null}
      closeIcon={null}
      open={loadingApprove || loadingCancelSell}
    >
      <div className="h-64 text-white flex-center">
        <img src="/images/loading.svg" alt="" className="w-20 h-20 spin" />
      </div>
    </Modal>
  )

  const handleApprove = useCallback(async () => {
    setLoadingApprove(true)

    try {
      await approve(MARKET_ADDRESS, callbackApprove)
    } catch (error) {
      setLoadingApprove(false)
      notification.warning({
        message: (
          <div className="text-yellow-200">
            You just declined the approval request in Metamask!
          </div>
        ),
        style: {
          background: '#191D24',
          borderRadius: '12px',
          color: 'yello',
        },
        duration: 2,
        placement: 'top',
      })
    }
  }, [approve, callbackApprove])

  const callbackCancelSell = useCallback(() => {
    setLoadingCancelSell(false)

    callbackCancelListingNftSuccess(listingId)

    notification.success({
      message: (
        <div className="flex flex-col flex-wrap items-start gap-2">
          <span className="text-green-600 font-normal">
            Transaction completed
          </span>
          <span className="text-gradient cursor-pointer">View on BscScan</span>
        </div>
      ),
      style: {
        background: '#191D24',
        borderRadius: '12px',
      },
      duration: 2,
    })
    
    callbackCloseModal && callbackCloseModal()
  }, [callbackCloseModal, callbackCancelListingNftSuccess])

  const handleCancelSell: (listingId: string | null) => any = useCallback(
    async (listingId) => {

      setLoadingCancelSell(true)

      try {
        if (listingId) {
          await cancelSellToken(listingId, callbackCancelSell)
        }
      } catch (error) {
        setLoadingCancelSell(false)
        notification.warning({
          message: (
            <div className="text-yellow-200">
              You just declined the approval request in Metamask!
            </div>
          ),
          style: {
            background: '#191D24',
            borderRadius: '12px',
            color: 'yellow',
          },
          duration: 2,
          placement: 'top',
        })
      }
    },
    [cancelSellToken, callbackCancelSell],
  )

  return connected() === false ? (
    <>
      <div className="text-white">AllowanceMk : {allowanceMK.toString()} </div>
      <ButtonBorderGradient
        className="px-5 py-2 text-center"
        onClick={() => connect()}
      >
        Connect Wallet
      </ButtonBorderGradient>
    </>
  ) : allowanceMK === false ? (
    <>
      <div className="text-white">AllowanceMk : {allowanceMK.toString()} </div>
      <ButtonGradient className="py-2 text-base" onClick={handleApprove}>
        Approve
      </ButtonGradient>
      {renderSpinner()}
    </>
  ) : (
    <>
      <div className="text-white">AllowanceMk : {allowanceMK.toString()} </div>
      <div className="text-white">listingId : {listingId} </div>
      <div className="py-2 text-base text-center">
        <span
          className=" text-gradient cursor-pointer"
          onClick={() => handleCancelSell(listingId)}
        >
          Cancel Listing
        </span>
      </div>
      {renderSpinner()}
    </>
  )
}

export default ButtonUnListNft
