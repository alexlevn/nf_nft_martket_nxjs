/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from 'react'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import { Modal, notification } from 'antd'

const MintNFT = () => {
  const { connected, connect, allowance, approve, mint } = useWeb3()
  console.log(allowance)

  const [loadingApprove, setLoadingApprove] = useState(false)
  const [loadingMint, setLoadingMint] = useState(false)

  const callbackApprove = useCallback(() => {
    setLoadingApprove(false)
  }, [])

  const onClickApprove = useCallback(async () => {
    setLoadingApprove(true)
    try {
      await approve(callbackApprove)
    } catch (err) {
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

  const callbackMint = useCallback(() => {
    setLoadingMint(false)
  }, [])

  const onClickMint = useCallback(() => {
    setLoadingMint(true)
    mint(callbackMint)
  }, [mint, callbackMint])

  const renderBtn = useCallback(() => {
    const renderSpinner = () => (
      <Modal width={300} footer={null} closeIcon={null} open={loadingApprove}>
        <div className="h-64 text-white flex-center">
          <img src="/images/loading.svg" alt="" className="w-20 h-20 spin" />
        </div>
      </Modal>
    )

    const renderModalShoeNFT = () => (
      <Modal
        width={400}
        footer={null}
        closeIcon={null}
        open={loadingMint}
        onCancel={(_) => {
          setLoadingMint(false)
        }}
        className="bg-transparent"
      >
        <div className="text-white flex-center flex flex-col">
          <ButtonBorderGradient className="cursor-auto">
            <div className="flex-center">
              <img
                src="/images/shoes/shoe_brazil.png"
                alt=""
                className="h-60 w-60 lg:w-96 lg:h-96"
              />
            </div>
            <div className="flex flex-wrap w-full text-base font-light">
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-scgray">Team</span>
                <span className="text-white">Brazil</span>
              </div>
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-scgray">Rarity</span>
                <span className="text-white">0,08%</span>
              </div>
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-scgray">Estimate</span>
              </div>
              <div className="flex flex-col w-1/2 px-10 py-3 gap-1">
                <span className="text-white">≈ $68,000</span>
              </div>
            </div>
          </ButtonBorderGradient>
        </div>
        <div className="mt-5">
          <ButtonGradient
            onClick={() => {}}
            className="py-3 text-lg cursor-pointer"
          >
            Collect
          </ButtonGradient>
        </div>
        <div className="mt-5">
          <ButtonBorderGradient
            onClick={() => {}}
            className="py-3 text-lg flex-center cursor-pointer"
          >
            <span>View on BSCscan</span>
          </ButtonBorderGradient>
        </div>
      </Modal>
    )

    if (connected()) {
      if (allowance) {
        return (
          <>
            <ButtonGradient onClick={onClickMint} className="py-2 text-base">
              <span>Mint NFT</span>
            </ButtonGradient>
            {renderModalShoeNFT()}
          </>
        )
      } else {
        return (
          <>
            <ButtonGradient onClick={onClickApprove} className="py-2 text-base">
              <span>Approve</span>
            </ButtonGradient>
            {renderSpinner()}
          </>
        )
      }
    } else {
      return (
        <ButtonBorderGradient
          className="px-5 py-4 text-center"
          onClick={() => connect()}
        >
          <span>Connect Wallet</span>
        </ButtonBorderGradient>
      )
    }
  }, [
    allowance,
    connect,
    connected,
    onClickApprove,
    onClickMint,
    loadingApprove,
    loadingMint,
  ])

  return (
    <div className="w-full lg:w-5/12 flex flex-col gap-5 px-5 py-3  justify-between">
      <div className="flex flex-col gap-3">
        <p className="text-white font-semibold">Mint Your NFT</p>
        <p className="text-content">
          Mint randomly releases NFT shoes to represent the national team
        </p>
        <div className="flex justify-between">
          <span className="text-content">Minted times: </span>
          <span className="text-white font-semibold text-sm">0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-content">Minted rate: </span>
          <span className="text-white font-semibold text-sm">
            20% Get Tier1
          </span>
        </div>
      </div>

      {renderBtn()}
    </div>
  )
}

export default MintNFT
