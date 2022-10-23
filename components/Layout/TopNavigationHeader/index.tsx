/* eslint-disable @next/next/no-img-element */
import { Drawer } from 'antd'
import { ROURES } from 'common/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useWeb3 from 'common/hooks/useWeb3'
import ModalConnectWallet from 'components/Layout/ModalConnectWallet'
import ModalWalletDetail from '../ModalWalletDetail'

const TopNavigationHeader = () => {
  const { connected } = useWeb3()

  const router = useRouter()
  const [isShowDrawer, setIsShowDrawer] = useState(false)

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

      {connected() ? <ModalWalletDetail /> : <ModalConnectWallet />}
    </div>
  )
}
export default TopNavigationHeader
