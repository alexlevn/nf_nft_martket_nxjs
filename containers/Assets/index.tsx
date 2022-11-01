/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import { CardsListWithSellModal } from 'components/CardsList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getResponseData } from 'common/util'

const Assets = () => {
  const { wallet } = useWeb3()
  const [arrNfts, setArrNfts] = useState([])
  const [listingData, setListingData] = useState([])
  const [isShowListing, setIsShowListing] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://wcfi.wii.camp/v1.0/nfts`
      const params = {
        owner: wallet?.address,
        // tokenTypes: [1, 2],
      }
      const res = await axios.get(apiUrl, { params })

      setArrNfts(getResponseData(res))
    }

    const fetListingData = async () => {
      try {
        const params = { address: wallet?.address }
        const res = await axios.get('https://wcfi.wii.camp/v1.0/nfts/market', {
          params,
        })

        setListingData(getResponseData(res))
      } catch (e) {
        console.log('Catch Error: ', e)
      }
    }
    fetchData()
    if (wallet?.address) {
      fetchData()
    }
  }, [wallet?.address])

  return (
    <div className="">
      {/* Total Volume */}

      {/* Filter Form */}
      <div className="flex flex-col lg:flex-row justify-between  items-start gap-5">
        <div className="flex gap-5">
          <span
            className={
              'block cursor-pointer pb-1 border-b-2 ' +
              (!isShowListing ? '' : ' border-transparent text-scgray')
            }
            onClick={() => setIsShowListing(false)}
          >
            My assets ({arrNfts.length})
          </span>
          <span
            className={
              'block cursor-pointer pb-1 border-b-2  ' +
              (isShowListing
                ? 'border-white text-white'
                : ' border-transparent text-scgray')
            }
            onClick={() => setIsShowListing(true)}
          >
            Listing ({listingData.length})
          </span>
        </div>

        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="btn-dropdown">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
        </div>
      </div>

      {!isShowListing ? (
        <CardsListWithSellModal data={arrNfts} />
      ) : (
        <CardsListWithSellModal data={listingData} />
      )}
    </div>
  )
}

export default Assets
