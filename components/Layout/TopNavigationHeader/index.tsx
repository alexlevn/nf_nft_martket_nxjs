/* eslint-disable @next/next/no-img-element */
import { Drawer } from 'antd'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { ButtonGradient } from 'components/ButtonGradient'
import ModalTrigger from 'components/ModalTrigger'
import Link from 'next/link'
import { useState } from 'react'

const TopNavigationHeader = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false)
  const [connected, setConnected] = useState(false)

  const showDrawer = () => setIsShowDrawer(true)
  const onClose = () => setIsShowDrawer(false)
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
          <div className="flex flex-col gap-5 items-start">
            <Link href={'/'}>
              <a className="text-md menu_item_gradient" onClick={onClose}>
                Home
              </a>
            </Link>
            <Link href={'/market'}>
              <a className="text-md menu_item_gradient" onClick={onClose}>
                Marketplace
              </a>
            </Link>
            <Link href={'/assets'}>
              <a className="text-md menu_item_gradient" onClick={onClose}>
                Assets
              </a>
            </Link>
            <Link href={'/referral'}>
              <a className="text-md menu_item_gradient" onClick={onClose}>
                Referral Program
              </a>
            </Link>
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

      <div className="hidden lg:flex gap-10">
        <Link href={'/'}>
          <div className="text-sm menu_item_gradient">Home</div>
        </Link>
        <Link href={'/market'}>
          <div className="text-sm menu_item_gradient">Marketplace</div>
        </Link>
        <Link href={'/assets'}>
          <div className="text-sm menu_item_gradient">Assets</div>
        </Link>
        <Link href={'/referral'}>
          <div className="text-sm menu_item_gradient">Referral Program</div>
        </Link>
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
            <ButtonBorderGradient
              className="px-3 py-1 lg:px-5 lg:py-3"
              onClick={openModal}
            >
              <span className="text-sm">0xBBB6...e96e</span>
            </ButtonBorderGradient>
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
                  setConnected(!connected)
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
