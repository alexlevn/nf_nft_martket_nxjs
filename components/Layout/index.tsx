/* eslint-disable @next/next/no-img-element */
import { Layout, Modal } from 'antd'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { useState } from 'react'
import Sidebar from './Sidebar'

const AppLayout: React.FC<{ children: any }> = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeMenu = () => setIsShowMenu(false)

  return (
    <Layout className="min-h-screen bg-dark text-white panchang  ">
      {/* TopNavigationHeader */}
      <div className="flex justify-between px-5 lg:px-14 items-center py-5 w-full  z-50 fixed bg-dark ">
        <div className="flex items-center relative">
          <div onClick={() => setIsShowMenu(!isShowMenu)}>
            {/* {isShowMenu ? (
              <Image
                layout="fill"
                src="/images/icon_close.svg"
                alt=""
                className="block lg:hidden w-9 mr-4 cursor-pointer"
              />
            ) : (
              <Image
                layout="fill"
                src="/images/icon_menu.svg"
                alt=""
                className="block lg:hidden w-9 mr-4 cursor-pointer"
              />
            )} */}
          </div>

          <div className="text-white font-bold text-2xl cursor-pointer">
            WCFI
          </div>
        </div>

        <div className="hidden lg:flex gap-10">
          <div className="text-sm menu_item_gradient">Home</div>
          <div className="text-sm menu_item_gradient">Marketplace</div>
          <div className="text-sm menu_item_gradient">Assets</div>
          <div className="text-sm menu_item_gradient">Referral Program</div>
        </div>

        <ButtonBorderGradient
          className="px-5 py-3"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <span className="text-sm">0xBBB6...e96e</span>
        </ButtonBorderGradient>
      </div>

      <Layout className="flex justify-between mt-20  px-0  lg:px-14   flex-col lg:flex-row ">
        <Modal
          title={
            <div className="text-white panchang text-sm">Connect Metamask</div>
          }
          width={600}
          open={isModalOpen}
          className="p-0 text-white"
          onCancel={() => setIsModalOpen(false)}
          closeIcon={
            <div className="text-white font-sans text-xl font-thin">x</div>
          }
          footer={null}
        >
          <div className="bg-pcdark text-white font-semibold flex flex-wrap gap-5 justify-center py-3 lg:py-5 panchang text-xs">
            <div className="box-wallet">
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
        </Modal>
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
