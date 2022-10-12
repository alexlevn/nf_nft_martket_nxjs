import { Layout } from 'antd'
import Image from 'next/image'
import { FC, FunctionComponent, useState } from 'react'

const AppLayout: React.FC<{ children: any }> = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const closeMenu = () => setIsShowMenu(false)

  return (
    <Layout className="min-h-screen bg-dark text-white panchang  ">
      {/* TopNavigationHeader */}
      <div className="flex justify-between px-5 lg:px-14 items-center py-5 w-full  z-50 fixed bg-dark ">
        <div className="flex items-center relative">
          <div onClick={() => setIsShowMenu(!isShowMenu)}>
            {isShowMenu ? (
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
            )}
          </div>

          <div className="text-white font-bold text-2xl cursor-pointer">
            WCFI
          </div>
        </div>

        <div className="hidden lg:flex gap-10">
          <div className="cursor-pointer text-xs font-semibold hover:text-pcblue">
            Home
          </div>
          <div className="cursor-pointer text-xs font-semibold hover:text-pcblue">
            Marketplace
          </div>
          <div className="cursor-pointer text-xs font-semibold hover:text-pcblue">
            Assets
          </div>
          <div className="cursor-pointer text-xs font-semibold hover:text-pcblue">
            Referral Program
          </div>
        </div>

        <ButtonBorderGradient>
          <span className="text-xs">0xBBB6...e96e</span>
        </ButtonBorderGradient>
      </div>

      {/* END - TopNavigationHeader */}

      <div>Top Menu</div>
      <Layout className="flex justify-between mt-20  px-0 lg:px40 ">
        <div className="w-1/12 p-5 hidden lg:block" />
        <Layout.Content className="w-full lg:w-8/12 p-5 lg:block">
          {children}
        </Layout.Content>
        <div className="w-3/12 p-5 hidden lg:block">
          Right Sidebar
          <div className="mt-5 p-5">Components 01</div>
          <div className="mt-5 p-5">Components 02</div>
          <div className="mt-5 p-5">Components 03</div>
        </div>
      </Layout>
    </Layout>
  )
}

export default AppLayout

export const ButtonBorderGradient: React.FC<{ children: any }> = ({
  children,
}) => (
  <div className="border-btn-gradient px-10">
    <div className="btn-main-inside cursor-pointer hover:opacity-95 py-2 px-5 text-white font-semibold">
      {children}
    </div>
  </div>
)
