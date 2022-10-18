/* eslint-disable @next/next/no-img-element */
import { Button, Drawer, Layout } from 'antd'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import ModalTrigger from 'components/ModalTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Sidebar from './Sidebar'

const AppLayout: React.FC<{ children: any }> = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const closeMenu = () => {
    console.log('clicked me!!')
    setIsShowMenu(false)
  }

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <Layout className="min-h-screen bg-dark text-white panchang">
      {isShowMenu ? (
        <div
          className="h-screen w-screen fixed z-40 "
          style={{
            background: 'rgba(25, 29, 36, 0.64)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="mobile-menu fixed top-16 left-0 w-10/12 
            pl-5 h-screen  z-40 bg-dark
            flex flex-col justify-between pb-32 
            "
          >
            <div className="flex flex-col gap-5 mt-20 items-start">
              <Link href={'/'}>
                <a className="text-sm menu_item_gradient">Home</a>
              </Link>
              <Link href={'/market'}>
                <a
                  className="text-sm menu_item_gradient"
                  onClick={(e) => {
                    if (location.pathname === '/market') {
                      e.preventDefault()
                    }
                    if (e.metaKey || e.ctrlKey) {
                      e.stopPropagation()
                    }
                    closeMenu()
                  }}
                >
                  Marketplace
                </a>
              </Link>
              <Link href={'/assets'}>
                <a className="text-sm menu_item_gradient">Assets</a>
              </Link>
              <Link href={'/referral'}>
                <a className="text-sm menu_item_gradient">Referral Program</a>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {/* TopNavigationHeader */}
      <div className="flex justify-between px-5 lg:px-14 items-center py-5 w-full  z-50 fixed bg-dark ">
        <div className="flex items-center relative">
          <Drawer
            title="Basic Drawer"
            placement="left"
            onClose={onClose}
            open={open}
            className=""
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>

          <div onClick={showDrawer}>
            {isShowMenu ? (
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

          <div className="text-white font-bold text-xl cursor-pointer">
            WCFI
          </div>
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
          renderTrigger={(openModal) => (
            <ButtonBorderGradient
              className="px-3 py-1 lg:px-5 lg:py-3"
              onClick={openModal}
            >
              <span className="text-sm">0xBBB6...e96e</span>
            </ButtonBorderGradient>
          )}
          renderChildren={(_) => {
            return (
              <div className="rounded-lg text-white font-semibold flex flex-wrap gap-5 justify-center py-3 lg:py-5 panchang text-xs">
                <div className="box-wallet">
                  <img
                    src="/images/icon_metamask.png"
                    alt=""
                    className="w-14"
                  />
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

      <Layout className="flex justify-between mt-20  px-0  lg:px-14   flex-col lg:flex-row ">
        <div className="w-1/12 p-5 hidden lg:block" />
        <Layout.Content className="w-full lg:w-8/12 p-5 lg:block">
          {children}
        </Layout.Content>

        <Sidebar />
      </Layout>
    </Layout>
  )
}

export default AppLayout
