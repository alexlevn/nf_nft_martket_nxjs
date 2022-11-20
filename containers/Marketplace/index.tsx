/* eslint-disable @next/next/no-img-element */
import { Dropdown, Menu } from 'antd'
import axios from 'axios'
import { getResponseData } from 'common/util'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import { INft } from 'components/Card/interface'
import CardsListWithBuyButton from 'components/CartListWithBuyButton'
import ModalTrigger from 'components/ModalTrigger'
import { useEffect, useState } from 'react'
import FilterForm from './filterForm'

const LIMIT = 20

const SORT_BY = {
  NEWEST: '1',
  PRICE_TO_HIGH: '2',
  PRICE_TO_LOW: '3',
}

const Marketplace = () => {
  const [listNFT, setListNFT] = useState<INft[]>([])

  const [loading, setLoading] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const limit = LIMIT
  const [page, setPage] = useState(1)

  const [sortBy, setSortBy] = useState(SORT_BY.NEWEST)

  const arrSortBy = [
    {
      id: SORT_BY.NEWEST,
      name: 'Newest',
    },
    {
      id: SORT_BY.PRICE_TO_HIGH,
      name: 'Price: low to high',
    },
    {
      id: SORT_BY.PRICE_TO_LOW,
      name: 'Price: high to low',
    },
  ]

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

  const sortByMenu = (
    <Menu
      items={arrSortBy.map((item) => ({
        key: item.id,
        label: (
          <>
            <a target="_blank">{item.name}</a>
            {item.id === sortBy && (
              <img src="/images/check.svg" alt="" className="h-5 w-5" />
            )}
          </>
        ),
      }))}
      selectedKeys={[sortBy]}
      onClick={(menuItem) => {
        setSortBy(menuItem.key)
      }}
    />
  )

  return (
    <div className="">
      {/* Total Volume */}
      <div className="flex flex-col lg:flex-row justify-between  items-start gap-5">
        <span className="font-semibold">
          Items (Total {listNFT ? listNFT.length : 0})
        </span>

        <div className="flex gap-5 flex-col lg:flex-row">
          {/* Sort By */}
          <Dropdown overlay={sortByMenu}>
            <div className="btn-dropdown">
              Newest
              <img src="/images/arrow_down.svg" alt="" className="h-3 w-3" />
            </div>
          </Dropdown>

          {/* Filter Form */}
          <ModalTrigger
            title={<div className="text-white panchang text-sm">Filter</div>}
            footer={null}
            closeIcon={
              <div className="text-white font-sans text-xl font-thin">x</div>
            }
            onCancel={() => {}}
            renderTrigger={(openModal) => (
              <div className="btn-filter" onClick={openModal}>
                Filter
                <img src="/images/filter.svg" alt="" className="h-3 w-3" />
              </div>
            )}
            renderChildren={(closeModal) => (
              <FilterForm
                onSubmit={(values) => {
                  console.log('filter by Teams Id: ', values.toString())
                  closeModal()
                }}
              />
            )}
          />
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
