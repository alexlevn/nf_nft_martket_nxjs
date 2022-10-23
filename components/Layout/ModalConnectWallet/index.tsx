/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import { ButtonGradient } from 'components/ButtonGradient'
import ModalTrigger from 'components/ModalTrigger'

const ModalConnectWallet = () => {
  const { connect } = useWeb3()

  const connectMetamask = () => {
    connect()
  }

  return (
    <ModalTrigger
      title={
        <div className="text-white panchang text-sm">Connect Metamask</div>
      }
      width={600}
      footer={null}
      closeIcon={
        <div className="text-white font-sans text-xl font-thin">x</div>
      }
      renderTrigger={(openModal) => (
        <ButtonGradient
          className="px-3 py-1 lg:px-5 lg:py-1 text-sm"
          onClick={openModal}
        >
          Connect Wallet
        </ButtonGradient>
      )}
      renderChildren={(closeModal) => {
        return (
          <div className="rounded-lg text-white font-semibold flex flex-wrap gap-5 justify-center py-3 lg:py-5 panchang text-xs">
            <div
              className="box-wallet"
              onClick={() => {
                connectMetamask()
                closeModal()
              }}
            >
              <img src="/images/icon_metamask.png" alt="" className="w-14" />
              <span>Metamask</span>
            </div>
            <div className="box-wallet">
              <img src="/images/icon_bitkepp.png" alt="" className="w-14" />
              <span>BitKepp</span>
            </div>
            <div className="box-wallet">
              <img src="/images/icon_c98.png" alt="" className="w-14" />
              <span>C97</span>
            </div>
            <div className="box-wallet">
              <img src="/images/icon_trust.png" alt="" className="w-14" />
              <span>Trust Wallet</span>
            </div>
            <div className="box-wallet">
              <img src="/images/icon_safepal.png" alt="" className="w-14" />
              <span>SafePal</span>
            </div>
            <div className="box-wallet">
              <img
                src="/images/icon_walletconnect.png"
                alt=""
                className="w-14"
              />
              <span>Wallet Connect</span>
            </div>
          </div>
        )
      }}
    />
  )
}
export default ModalConnectWallet
