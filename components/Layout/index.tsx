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

      <Layout className="flex justify-between mt-20  px-0 lg:px40  flex-col lg:flex-row">
        <div className="w-1/12 p-5 hidden lg:block" />
        <Layout.Content className="w-full lg:w-8/12 p-5 lg:block">
          {children}
        </Layout.Content>

        {/* SIDE BAR */}
        <div className="w-full lg:w-3/12 p-5  gap-5 flex flex-col">
          {/* MATCH SCHEDULE */}
          <div className="flex flex-col gap-5 p-5 lg:p-8  justify-between  bg-pcgray rounded-md">
            <div className="flex flex-col gap-5">
              <p className="text-white font-semibold">Match Schedule</p>
              <p className="text-content">Match day 1 of 3</p>
              <p className="text-content">Group A</p>
              <div>
                {/* row */}
                <div className="flex gap-2 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/flags/brazil.png" alt="" />
                  <span className="text-white font-semibold">BRZ</span>
                </div>
              </div>
            </div>
          </div>

          {/* REFERRAL COMPONENT */}
          <div className="flex flex-col gap-5 p-5 lg:p-8  justify-between  bg-pcgray rounded-md">
            <div className="flex flex-col gap-5">
              <p className="text-white font-semibold">My Referral Link</p>
              <p className="text-content">
                Invite friends to join and get up to 25% referral commission.
              </p>
              <div className="flex justify-between text-blue-300">
                Learn more
              </div>
            </div>
            <ButtonBorderGradient>
              <span className="text-base">Invite Friends</span>
            </ButtonBorderGradient>
          </div>
          {/* END - REFERRAL COMPONENT */}
        </div>
        {/* END- SIDE BAR */}
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
