/* eslint-disable @next/next/no-img-element */
import { InputNumber } from 'antd'
import { ButtonGradient } from 'components/ButtonGradient'
import { INft } from 'components/Card/interface'
import { FC, useEffect, useState } from 'react'

const SellNft: FC<{ nft?: INft }> = (nft) => {
  const [isApproved, setIsApproved] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setIsApproved(true)
        setLoading(false)
      }, 2000)
    }
  }, [loading])

  return (
    <div className="flex flex-col gap-10 p-5 text-scgray">
      {/* Enter Price */}
      <div className="flex flex-col">
        <span className="px-3">Enter Price(BUSD)</span>
        <InputNumber className="w-full bg-pcdark rounded-lg text-white" />
        <div className="mt-5 flex justify-between">
          <span>Est</span>
          <span className="text-white">$96.000</span>
        </div>
      </div>
      {/* Info: you will receive */}
      <div className="flex flex-col gap-2">
        <span>
          Listing is FREE! When the sale succeeds, the following fees will
          occur.
        </span>

        <div className="flex justify-between">
          <span>Marketplace Fee</span>
          <span className="text-white">5%</span>
        </div>

        <div className="flex justify-between">
          <span>You will receive</span>
          <span className="text-white">0.00 BUSD</span>
        </div>
      </div>

      {/* Button */}
      {loading ? (
        <div
          onClick={() => {
            // .. waiting
          }}
          className="btn-pcmodal cursor-wait"
        >
          Sell
        </div>
      ) : isApproved ? (
        <ButtonGradient onClick={() => setIsApproved(false)}>
          <span className="py-2">Sell</span>
        </ButtonGradient>
      ) : (
        <ButtonGradient onClick={() => setLoading(true)}>
          <span className="py-2">Approve</span>
        </ButtonGradient>
      )}
    </div>
  )
}

export default SellNft
