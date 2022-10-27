/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import CardsList from 'components/CardsList'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { getResponseData } from 'common/util'

const Assets = () => {
  const { wallet } = useWeb3()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `http://wcfi.wii.camp/v1.0/nfts?owner=${wallet?.address}&tokenTypes=%5B1,2%5D`
      // const apiUrl = `http://wcfi.wii.camp/v1.0/nfts?owner=${wallet?.address}`

      console.log('apiUrl = ', apiUrl)
      const params = {
        tokenTypes: [1, 2],
      }
      // const res = await axios.get(apiUrl, { params })
      const res = await axios.get(apiUrl)
      console.log('res =', res)
      console.log('data =', getResponseData(res))
    }

    console.log('wallet =', wallet)

    if (wallet && wallet.address) {
      fetchData()
    }
  }, [wallet])

  return (
    <div className="">
      {/* Total Volume */}

      {/* Filter Form */}
      <div className="flex flex-col lg:flex-row justify-between  items-start gap-5">
        <div className="flex gap-5">
          <span className="text-white block pb-1 border-b-2 border-white cursor-pointer">
            My assets ({data.length})
          </span>
          <span className="text-scgray cursor-pointer">Listing (3)</span>
        </div>

        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="btn-dropdown">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Table */}
      <CardsList data={Array.from(Array(6).keys())} />
    </div>
  )
}

export default Assets
