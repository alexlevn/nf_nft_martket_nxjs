/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import ModalTrigger from 'components/ModalTrigger'
import { useEffect } from 'react'

const ModalWalletDetail = () => {
  const { wallet } = useWeb3()

  useEffect(() => {
    // ...
  }, [wallet])

  return (
    <ModalTrigger
      title={<div className="text-white panchang text-sm">Your Wallet</div>}
      width={600}
      footer={null}
      closeIcon={
        <div className="text-white font-sans text-xl font-thin">x</div>
      }
      renderTrigger={(openModal) => (
        <div className="flex justify-center items-center gap-7">
          <div className="hidden lg:flex gap-1 justify-center items-center">
            <img src="/images/busd.svg" alt="" className="lg:block w-8 h-8" />
            <div className="flex flex-col">
              <span className="text-scgray text-xs font-thin">BUSD</span>
              <span className="text-base font-semibold">{wallet?.busd ? Math.floor(Number(wallet?.busd) * 100) / 100 : ''}</span>
            </div>
          </div>

          <ButtonBorderGradient
            className="px-3 py-1 lg:px-5 lg:py-3 "
            onClick={openModal}
          >
            {wallet?.address ? (
              <span className="text-sm">
                {wallet.address.slice(0, 6) + '...' + wallet.address.slice(-3)}
              </span>
            ) : (
              <span className="text-sm">0xBBB6...e96e</span>
            )}
          </ButtonBorderGradient>
        </div>
      )}
      renderChildren={(closeModal) => {
        return (
          <div className="rounded-lg text-white font-semibold flex flex-col gap-5 lg:gap-8 justify-center py-3 lg:py-5 panchang text-xs px-5">
            <div className="text-pcgreen text-base">Connected</div>
            <div className="text-white text-lg font-bold">
              {wallet?.address}
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap gap-2 lg:gap-10 justify-start items-start">
              <div className="text-gradient flex gap-2 items-center cursor-pointer">
                <span>Copy Address</span>
                <img src="/images/square.svg" alt="" className="w-6 h-6" />
              </div>
              <div className="text-gradient flex gap-2 items-center cursor-pointer">
                <span>View on BscScan</span>
                <img src="/images/up_arrow.svg" alt="" className="w-6 h-6" />
              </div>
            </div>
            <ButtonBorderGradient
              className="px-5 py-3 text-center text-base"
              onClick={closeModal}
            >
              Change
            </ButtonBorderGradient>
            <div className="text-center text-base">
              <span
                className="text-gradient cursor-pointer"
                onClick={closeModal}
              >
                Logout
              </span>
            </div>
          </div>
        )
      }}
    />
  )
}
export default ModalWalletDetail
