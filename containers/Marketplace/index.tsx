/* eslint-disable @next/next/no-img-element */
import { Dropdown, Menu } from 'antd'
import axios from 'axios'
import { getResponseData } from 'common/util'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { INft } from 'components/Card/interface'
import CardsListWithBuyButton from 'components/CartListWithBuyButton'
import { useEffect, useState } from 'react'

const Marketplace = () => {
  const [listNFT, setListNFT] = useState<INft[]>([])
  const total = 6969
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('newest')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://wcfi.wii.camp/v1.0/nfts/market')
        const data = getResponseData(res as any)
        setListNFT(data)
      } catch (e) {
        console.log('Catch Error: ', e)
      }
    }
    fetchData()
  }, [])

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <>
              <a target="_blank">Newest</a>
              <img src="/images/check.svg" alt="" className="h-5 w-5" />
            </>
          ),
        },

        {
          key: '2',
          label: <a target="_blank">Price: high to low</a>,
        },
        {
          key: '3',
          label: <a target="_blank">Price: low to high</a>,
        },
      ]}
    />
  )

  return (
    <div className="">
      {/* Total Volume */}

      {/* Filter Form */}
      <div className="flex flex-col lg:flex-row justify-between  items-start gap-5">
        <span className="font-semibold">
          Items (Total {listNFT ? listNFT.length : 0})
        </span>

        <div className="flex gap-5 flex-col lg:flex-row">
          <Dropdown overlay={menu}>
            <div className="btn-dropdown">
              Newest
              <img src="/images/arrow_down.svg" alt="" className="h-3 w-3" />
            </div>
          </Dropdown>

          <div className="btn-dropdown">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
        </div>
      </div>

      <CardsListWithBuyButton data={listNFT} />

      {/* Load More */}
      <div className="flex-center mt-10">
        <ButtonBorderGradient className="px-10 py-3">
          Load more
        </ButtonBorderGradient>
      </div>
    </div>
  )
}

export default Marketplace
