/* eslint-disable @next/next/no-img-element */
import { InputNumber, Modal, notification } from 'antd'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonGradient } from 'components/ButtonGradient'
import { FC, useEffect, useState } from 'react'

const SellNft: FC<{
  tokenId: string
  tokenAddress: string
  callbackCloseModalNFTDetail: any
}> = ({ tokenId, tokenAddress, callbackCloseModalNFTDetail }) => {
  const { checkApproved, approveToken, sellToken } = useWeb3()

  const [isApproved, setIsApproved] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingApprove, setLoadingApprove] = useState(false)
  const [loadingSell, setLoadingSell] = useState(false)
  const [price, setPrice] = useState(0)
  const [priceReceive, setPriceReceive] = useState(0)

  const callbackCheckApproved = (approved: boolean) => {
    setLoading(false)
    setLoadingApprove(false)
    setIsApproved(approved)
  }

  const onClickApprove = async () => {
    setLoadingApprove(true)
    try {
      await approveToken(tokenId, callbackCheckApproved)
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
        duration: 6,
        placement: 'top',
      })
    }
  }

  const onChangeInput: (e: number | null) => void = (e) => {
    if (e) {
      setPrice(e)
      setPriceReceive(e - e * 0.05)
    }
  }

  const callbackSellToken = () => {
    setLoadingSell(false)

    callbackCloseModalNFTDetail()

    notification.success({
      message: <div className="text-white">Transaction Completed</div>,
      style: {
        background: '#191D24',
        borderRadius: '12px',
        color: 'yello',
      },
      duration: 6,
      placement: 'top',
    })
  }

  const onClickSell = async () => {
    if (price === 0 || price === null) {
      return
    }

    setLoadingSell(true)
    try {
      await sellToken(tokenId, tokenAddress, price, callbackSellToken)
    } catch (error) {
      setLoadingSell(false)
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
        duration: 6,
        placement: 'top',
      })
    }
  }

  const renderSpinner = () => (
    <Modal
      width={300}
      footer={null}
      closeIcon={null}
      open={loadingApprove || loadingSell}
    >
      <div className="h-64 text-white flex-center">
        <img src="/images/loading.svg" alt="" className="w-20 h-20 spin" />
      </div>
    </Modal>
  )

  useEffect(() => {
    const check = () => {
      setLoading(true)

      checkApproved(tokenId, callbackCheckApproved)
    }

    check()
  }, [tokenId, checkApproved])

  return (
    <div className="flex flex-col gap-10 p-5 text-scgray">
      {renderSpinner()}
      {/* Enter Price */}
      <div className="flex flex-col">
        <span className="px-3">Enter Price(BUSD)</span>
        <InputNumber
          onChange={onChangeInput}
          value={price}
          className="w-full bg-pcdark rounded-lg text-white"
        />
        <div className="mt-5 flex justify-between">
          <span>Est</span>
          <span className="text-white">$96.000</span>
        </div>
      </div>
      {/* Info: you will receive */}
      <div className="flex flex-col gap-2">
        <span>
          Listing is FREE! When the sale succeeds, the following fees will
          occur.
        </span>

        <div className="flex justify-between">
          <span>Marketplace Fee</span>
          <span className="text-white">5%</span>
        </div>

        <div className="flex justify-between">
          <span>You will receive</span>
          <span className="text-white">{`${(
            Math.floor(priceReceive * 100) / 100
          ).toLocaleString('de-DE')} BUSD`}</span>
        </div>
      </div>

      {/* Button */}
      {loading ? (
        <div
          onClick={() => {
            // .. waiting
          }}
          className="btn-pcmodal cursor-wait"
        >
          Sell
        </div>
      ) : isApproved ? (
        <ButtonGradient onClick={onClickSell}>
          <span className="py-2">Sell</span>
        </ButtonGradient>
      ) : (
        <ButtonGradient onClick={onClickApprove}>
          <span className="py-2">Approve</span>
        </ButtonGradient>
      )}
    </div>
  )
}

export default SellNft
