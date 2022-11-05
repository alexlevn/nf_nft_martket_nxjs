/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { INft } from 'components/Card/interface'
import useWeb3 from 'common/hooks/useWeb3'
import axios from 'axios'
import { getResponseData } from 'common/util'
import MyAssets from './MyAssets'
import MyListing from './MyListing'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'

const LIMIT = 20

const Assets = () => {
  const { wallet } = useWeb3()

  const [isShowListing, setIsShowListing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [disableMyAssetsButton, setDisableMyAssetsButton] = useState(false)
  const [disableMyListingButton, setDisableMyListingButton] = useState(false)
  
  const [arrNfts, setArrNfts] = useState<INft[]>([])
  const [listingData, setListingData] = useState<INft[]>([])
  

  const limit = LIMIT
  const [pageMyAssets, setPageMyAssets] = useState(1)
  const [pageMyListing, setPageMyListing] = useState(1)

  const callbackListingNftSuccess = (tokenId: string) => {
    setArrNfts(arrNfts.filter((item) => item.tokenId !== tokenId))
    
    const newItemListing = arrNfts.filter((item) => item.tokenId === tokenId)
    setListingData((preState) => ([
      ...newItemListing,
      ...preState
    ]))
  }

  const callbackCancelListingNftSuccess = (listingId: string) => {
    setListingData(listingData.filter((item) => item.listingId !== listingId))
    
    const newItemMyAsset = listingData.filter((item) => item.listingId === listingId)
    setArrNfts((preState) => ([
      ...newItemMyAsset,
      ...preState
    ]))
  }
  
  
  const getMyAssets = async () => {
    try {
      setLoading(true)
      const params = {
        owner: wallet?.address,
        // tokenTypes: [1, 2],
        page: pageMyAssets,
        limit,
      }
      const res = await axios.get('/nfts', { params })
      const data = getResponseData(res as any)
      setArrNfts([...arrNfts, ...data])
      setPageMyAssets(pageMyAssets + 1)

      if (data.length < limit) {
        setDisableMyAssetsButton(true)
      }
    } catch (e) {
      console.log('Catch Error: ', e)
    } finally {
      setLoading(false)
    }
  }

  const getMyListing = async () => {
    try {
      setLoading(true)
      const params = {
        seller: wallet?.address,
        // tokenTypes: [1, 2],
        page: pageMyListing,
        limit,
      }
      const res = await axios.get('/nfts/market', { params })
      const data = getResponseData(res as any)
      setListingData([...listingData, ...data])
      setPageMyListing(pageMyListing + 1)

      if (data.length < limit) {
        setDisableMyListingButton(true)
      }
    } catch (e) {
      console.log('Catch Error: ', e)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = () => {
    if (isShowListing) {
      getMyListing()
    } else {
      getMyAssets()
    }
  }

  useEffect(() => {
    if (wallet?.address) {
      getMyAssets();
      getMyListing();
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
        <>
          <MyAssets myAssets={arrNfts} callbackListingNftSuccess={callbackListingNftSuccess} />

          {loading ? (
            <div className="flex-center mt-10">
              <img src="/images/loading.svg" alt="" className="w-20 h-20 spin" />
            </div>
          ) : disableMyAssetsButton ? (
            <div className="flex-center mt-10 ">
              <div
                className="px-10 py-3  border border-gray-800 rounded-lg text-gray-800 "
                onClick={() => null}
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
      ) : (
        <>
          <MyListing listingData={listingData}
            callbackCancelListingNftSuccess={callbackCancelListingNftSuccess}
          />

          {loading ? (
            <div className="flex-center mt-10">
              <img src="/images/loading.svg" alt="" className="w-20 h-20 spin" />
            </div>
          ) : disableMyListingButton ? (
            <div className="flex-center mt-10 ">
              <div
                className="px-10 py-3  border border-gray-800 rounded-lg text-gray-800 "
                onClick={() => null}
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
      )}
    </div>
  )
}

export default Assets
