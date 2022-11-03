/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { getResponseData } from 'common/util'
import CardsListWithSellModal from 'components/CartListWithSellModal'
import { INft } from 'components/Card/interface'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'

const LIMIT = 20

const MyListing: FC<{
  onChange?: (value: number) => void
}> = ({ onChange }) => {
  const { wallet } = useWeb3()
  const [listingData, setListingData] = useState<INft[]>([])

  const [loading, setLoading] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const limit = LIMIT
  const [page, setPage] = useState(1)

  const loadMore = async () => {
    try {
      setLoading(true)
      const params = {
        seller: wallet?.address,
        // tokenTypes: [1, 2],
        page: page,
        limit,
      }
      const res = await axios.get('/nfts', { params })
      const data = getResponseData(res as any)
      setListingData([...listingData, ...data])
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
    if (wallet?.address) {
      loadMore()
    }
  }, [wallet?.address])

  useEffect(() => {
    onChange && onChange(listingData.length)
  }, [listingData, onChange])

  return (
    <>
      <CardsListWithSellModal data={listingData} />
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
    </>
  )
}

export default MyListing