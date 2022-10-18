/* eslint-disable @next/next/no-img-element */
import { Drawer } from 'antd'
import { ROURES } from 'common/routes'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import ModalTrigger from 'components/ModalTrigger'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useWeb3 from 'common/hooks/useWeb3'

const TopNavigationHeader = () => {
  const { wallet, connect } = useWeb3()

  const router = useRouter()
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const [connected, setConnected] = useState(false)

  const showDrawer = () => setIsShowDrawer(true)
  const onClose = () => setIsShowDrawer(false)

  const connectMetamask = () => {
    connect()
  }

  return (
    <div className="flex justify-between px-5 lg:px-14 items-center py-5 w-full  z-50 fixed bg-dark ">
      <div className="flex items-center relative">
        <Drawer
          title=""
          headerStyle={{ display: 'none' }}
          bodyStyle={{
            backgroundColor: '#080A0c',
          }}
          contentWrapperStyle={{
            marginTop: 60,
          }}
          placement="left"
          onClose={onClose}
          open={isShowDrawer}
        >
          <div className="flex flex-col gap-5 items-start text-white">
            {ROURES.map((item, index) => (
              <Link href={item.path} key={index}>
                <div
                  className={
                    'text-md menu-item-gradient ' +
                    (router.pathname === item.path ? 'text-gradient' : '')
                  }
                  onClick={onClose}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </Drawer>

        <div onClick={showDrawer}>
          {isShowDrawer ? (
            <img
              src="/images/icon_close.svg"
              alt=""
              className="block lg:hidden w-7 mr-3 cursor-pointer"
            />
          ) : (
            <img
              src="/images/icon_menu.svg"
              alt=""
              className="block lg:hidden w-7 mr-3 cursor-pointer"
            />
          )}
        </div>

        <div className="text-white font-bold text-xl cursor-pointer">WCFI</div>
      </div>

      <div className="hidden lg:flex gap-10 text-white">
        {ROURES.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={
                'text-sm menu-item-gradient ' +
                (router.pathname === item.path ? 'text-gradient' : '')
              }
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>

      <ModalTrigger
        title={
          <div className="text-white panchang text-sm">Connect Metamask</div>
        }
        width={600}
        footer={null}
        closeIcon={
          <div className="text-white font-sans text-xl font-thin">x</div>
        }
        renderTrigger={(openModal) =>
          connected ? (
            <div className="flex justify-center items-center gap-7">
              <div className="hidden lg:flex gap-1 justify-center items-center">
                <img
                  src="/images/busd.svg"
                  alt=""
                  className="lg:block w-8 h-8"
                />
                <div className="flex flex-col">
                  <span className="text-scgray text-xs font-thin">BUSD</span>
                  <span className="text-base font-semibold">200,000.00</span>
                </div>
              </div>

              <ButtonBorderGradient
                className="px-3 py-1 lg:px-5 lg:py-3 "
                onClick={openModal}
              >
                {wallet?.address ? (
                  <span className="text-sm">
                    {wallet.address.slice(0, 6) +
                      '...' +
                      wallet.address.slice(-3)}
                  </span>
                ) : (
                  <span className="text-sm">0xBBB6...e96e</span>
                )}
              </ButtonBorderGradient>
            </div>
          ) : (
            <ButtonGradient
              className="px-3 py-1 lg:px-5 lg:py-1 text-sm"
              onClick={openModal}
            >
              Connect Wallet
            </ButtonGradient>
          )
        }
        renderChildren={(closeModal) => {
          return (
            <div className="rounded-lg text-white font-semibold flex flex-wrap gap-5 justify-center py-3 lg:py-5 panchang text-xs">
              <div
                className="box-wallet"
                onClick={() => {
                  connectMetamask()
                  setConnected(true)
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
    </div>
  )
}
export default TopNavigationHeader
