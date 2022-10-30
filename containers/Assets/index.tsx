/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import { CardsListWithSellModal } from 'components/CardsList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getResponseData } from 'common/util'

const Assets = () => {
  const { wallet } = useWeb3()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://wcfi.wii.camp/v1.0/nfts?owner=${wallet?.address}`
      const params = {
        // tokenTypes: [1, 2],
      }
      const res = await axios.get(apiUrl, { params })
      setData(getResponseData(res))
    }
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
          <span className="text-white block pb-1 border-b-2 border-white cursor-pointer">
            My assets ({data.length})
          </span>
          <span className="text-scgray cursor-pointer">Listing (0)</span>
        </div>

        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="btn-dropdown">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
        </div>
      </div>

      <CardsListWithSellModal data={data} />
    </div>
  )
}

export default Assets