/* eslint-disable @next/next/no-img-element */
import { Modal, notification } from 'antd'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import CardNft from 'components/Card'
import { INft } from 'components/Card/interface'
import ModalTrigger from 'components/ModalTrigger'
import NFTDetail from 'components/NFTDetail'
import { MARKET_ADDRESS } from 'constants/index'
import { FC, ReactNode, useCallback, useState } from 'react'

const CardsListWithBuyButton: FC<{ data: INft[] }> = ({ data }) => {
  const { connected, connect, allowanceMK, approve, buyToken } = useWeb3();

  const [loadingApprove, setLoadingApprove] = useState(false);
  const [loadingBuy, setLoadingBuy] = useState(false);

  const callbackApprove = useCallback(() => {
    setLoadingApprove(false)
  }, [])
  
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
        duration: 6,
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
      duration: 6,
    })
  }, [])
  
  const handleBuy: (listingId: string | null) => any = useCallback(async (listingId) => {
    console.log(listingId);
    
    setLoadingBuy(true);
    
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
          color: 'yello',
        },
        duration: 6,
        placement: 'top',
      })
    }
  }, [buyToken, callbackBuy])

  const renderAction: (listingId: string | null) => ReactNode = (listingId) => {
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

    if (connected()) {
      if (allowanceMK) {
        return (
          <>
            <ButtonGradient
              className="py-2 text-base"
              onClick={handleBuy(listingId)}
            >
              Buy
            </ButtonGradient>
            {renderSpinner()}
          </>
        )
      } else {
        return (
          <>
            <ButtonGradient
              className="py-2 text-base"
              onClick={handleApprove}
            >
              Approve
            </ButtonGradient>
            {renderSpinner()}
          </>
        )
      }
    } else {
      return (
        <ButtonBorderGradient
          className="px-5 py-2 text-center"
          onClick={() => connect()}
        >
          Connect Wallet
        </ButtonBorderGradient>
      )
    }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
      {data.length > 0 ? (
        data.map((item, index) => (
          <ModalTrigger
            key={index}
            title={
              <div className="text-white panchang text-sm">NFT Details</div>
            }
            width={700}
            footer={null}
            closeIcon={
              <div className="text-white font-sans text-xl font-thin">x</div>
            }
            renderTrigger={(openModal) => (
              <div className="cursor-pointer" onClick={openModal}>
                <CardNft key={index} item={item} />
              </div>
            )}
            renderChildren={(closeModal) => (
              <NFTDetail
                item={item}
                renderAction={() => renderAction(item.listingId)}
              />
            )}
          />
        ))
      ) : (
        <div className="flex-center w-full mt-10">
          <img src="/images/no_data.svg" alt="" className="w-20 h-20" />
        </div>
      )}
    </div>
  )
}

export default CardsListWithBuyButton
