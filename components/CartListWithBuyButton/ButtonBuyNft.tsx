/* eslint-disable @next/next/no-img-element */
import { Modal, notification } from 'antd'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import { MARKET_ADDRESS } from 'constants/index'
import { FC, useCallback, useState } from 'react'

const ButtonBuyNft: FC<{
  listingId: string
  callbackCloseModal?: () => void
}> = ({ listingId, callbackCloseModal }) => {
  const { connected, connect, allowanceMK, approve, buyToken } = useWeb3()

  const [loadingApprove, setLoadingApprove] = useState(false)
  const [loadingBuy, setLoadingBuy] = useState(false)

  const callbackApprove = useCallback(() => {
    setLoadingApprove(false)
  }, [])

  const renderSpinner = () => (
    <Modal
      width={300}
      footer={null}
      closeIcon={null}
      open={loadingApprove || loadingBuy}
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

  const callbackBuy = useCallback(() => {
    setLoadingBuy(false)

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
  }, [callbackCloseModal])

  const handleBuy: (listingId: string | null) => any = useCallback(
    async (listingId) => {
      console.log(listingId)

      setLoadingBuy(true)

      try {
        if (listingId) {
          await buyToken(listingId, callbackBuy)
        }
      } catch (error) {
        setLoadingBuy(false)
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
    [buyToken, callbackBuy],
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
      <ButtonGradient className="py-2 text-base" onClick={handleApprove}>
        Approve
      </ButtonGradient>
      {renderSpinner()}
    </>
  ) : (
    <>
      <ButtonGradient
        className="py-2 text-base"
        onClick={() => handleBuy(listingId)}
      >
        Buy
      </ButtonGradient>
      {renderSpinner()}
    </>
  )
}

export default ButtonBuyNft
