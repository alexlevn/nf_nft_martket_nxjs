/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import MyAssets from './MyAssets'
import MyListing from './MyListing'

const Assets = () => {
  const [isShowListing, setIsShowListing] = useState(false)
  const [totalAssets, setTotalAssets] = useState(0)
  const [totalListed, setTotalListed] = useState(0)

  const onChangeAssets = (value: number) => {
    setTotalAssets(value)
  }

  const onChangeListed = (value: number) => {
    setTotalListed(value)
  }

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
            My assets ({totalAssets})
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
            Listing ({totalListed})
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
        <MyAssets onChange={onChangeAssets} />
      ) : (
        <MyListing onChange={onChangeListed} />
      )}
    </div>
  )
}

export default Assets
