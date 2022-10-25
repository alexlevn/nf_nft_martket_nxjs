/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from 'react'
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import ModalTrigger from 'components/ModalTrigger'
import { Modal, Spin } from 'antd'

const MintNFT = () => {
  const { connected, connect, allowance, approve, mint } = useWeb3()
  console.log(allowance)

  const [loadingApprove, setLoadingApprove] = useState(false)
  const [loadingMint, setLoadingMint] = useState(false)

  const callbackApprove = useCallback(() => {
    setLoadingApprove(false)
  }, [])

  const onClickApprove = useCallback(() => {
    // console.log('loading approve ...')
    setLoadingApprove(true)
    approve(callbackApprove)
  }, [approve, callbackApprove])

  const callbackMint = useCallback(() => {
    setLoadingMint(false)
  }, [])

  const onClickMint = useCallback(() => {
    console.log('loading mint = true ...')

    setLoadingMint(true)
    setTimeout(() => {
      mint(callbackMint)
    }, 3000)
  }, [mint, callbackMint])

  const renderBtn = useCallback(() => {
    if (connected()) {
      // --- design
      return (
        <>
          <div>allowance: {allowance.toString()}</div>
          <ButtonGradient onClick={onClickMint} className="py-2 text-base">
            <span>TEST </span>
          </ButtonGradient>
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
        </>
      )
      // --- end design
      if (allowance) {
        return (
          <>
            <div>allowance: {allowance.toString()}</div>
            <ButtonGradient onClick={onClickMint} className="py-2 text-base">
              <span>Mint NFT</span>
            </ButtonGradient>
            <Modal
              width={300}
              footer={null}
              closeIcon={null}
              open={loadingMint}
              onCancel={(_) => {}}
            >
              <div className="h-48 text-white flex-center">minting ...</div>
            </Modal>
          </>
        )
      } else {
        return (
          <>
            <div>allowance: {allowance.toString()}</div>
            <ButtonGradient onClick={onClickApprove} className="py-2 text-base">
              <span>Approve</span>
            </ButtonGradient>
            <Modal
              width={300}
              footer={null}
              closeIcon={null}
              open={loadingApprove}
              onCancel={(_) => {}}
            >
              <div className="h-48 text-white flex-center">
                <img
                  src="/images/loading.svg"
                  alt=""
                  className="w-20 h-20 spin"
                />
              </div>
            </Modal>
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
  }, [allowance, connect, connected, onClickApprove, onClickMint])

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
