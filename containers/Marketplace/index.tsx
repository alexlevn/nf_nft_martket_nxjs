/* eslint-disable @next/next/no-img-element */
import { Dropdown, Menu } from 'antd'
import axios from 'axios'
import { getResponseData } from 'common/util'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { INft } from 'components/Card/interface'
import CardsListWithBuyButton from 'components/CartListWithBuyButton'
import { useEffect, useState } from 'react'

const LIMIT = 20

const Marketplace = () => {
  const [listNFT, setListNFT] = useState<INft[]>([])

  const [loading, setLoading] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const limit = LIMIT
  const [page, setPage] = useState(1)

  const loadMore = async () => {
    try {
      setLoading(true)
      const params = {
        page: page,
        limit,
      }
      const res = await axios.get('/nfts/market', { params })
      const data = getResponseData(res as any)
      setListNFT([...listNFT, ...data])
      setPage(page + 1)

      if (data.length < limit) {
        setDisableButton(true)
      }
    } catch (e) {
      console.log('Catch Error: ', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMore()
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

      {loading ? (
        <div className="flex-center mt-10">
          <img src="/images/loading.svg" alt="" className="w-20 h-20 spin" />
        </div>
      ) : disableButton ? (
        <div className="flex-center mt-10 ">
          <div
            className="px-10 py-3  border border-gray-800 rounded-lg text-gray-800 "
            onClick={() => {}}
          >
            Load More
          </div>
        </div>
      ) : (
        <div className="flex-center mt-10">
          <ButtonBorderGradient className="px-10 py-3" onClick={loadMore}>
            Load More
          </ButtonBorderGradient>
        </div>
      )}
    </div>
  )
}

export default Marketplace
