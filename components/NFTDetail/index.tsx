/* eslint-disable @next/next/no-img-element */
import { InputNumber } from 'antd'
import { getFontColorClassname, getTeam } from 'common/util'
import { ButtonGradient } from 'components/ButtonGradient'
import { INft } from 'components/Card/interface'
import ModalTrigger from 'components/ModalTrigger'
import { FC, useEffect, useState } from 'react'

const NFTDetail: FC<{ item: INft }> = ({ item }) => {
  const team = getTeam(item)
  // const image = item.image.replaceAll('https://wcfi.wii.camp/public', '')
  const image =
    '/images/teams/' + team.name.replaceAll(' ', '_').toLowerCase() + '.png'

  return (
    <div className="flex flex-col lg:flex-row py-5">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex-center overflow-hidden h-60">
        <img
          // TODO: path image
          src={image}
          alt=""
          placeholder="blur"
          className="w-52"
        />
      </div>

      {/* INFO */}
      <div className="w-full lg:w-1/2  flex flex-col gap-3 justify-center text-base  font-light p-8">
        <div
          className={
            'font-semibold text-lg' +
            ' ' +
            getFontColorClassname(team.tier || 4)
          }
        >
          Tier {team.tier}
        </div>
        <div className="flex justify-between">
          <span className="text-scgray">Team</span>
          <span className="text-white font-medium">{team.name}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-scgray">Rarity</span>
          <span className="text-white font-medium">{team.rarity}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-scgray">ID</span>
          <span className="text-white font-medium">#{item.id.slice(-7)}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-scgray">Price</span>
          <span className="text-white font-medium flex gap-2">
            <img src="/images/busd.svg" alt="" className="w-6 h-6" />
            {item.price || 'null'}
          </span>
        </div>
        <div>
          <ModalTrigger
            title={<div className="text-white panchang text-sm">Sell NFT</div>}
            footer={null}
            closeIcon={
              <div className="text-white font-sans text-xl font-thin">x</div>
            }
            renderTrigger={(openModal) => (
              <ButtonGradient onClick={openModal} className="py-1 text-base">
                Sell
              </ButtonGradient>
            )}
            renderChildren={(closeModal) => <SellNFT />}
          />
        </div>
      </div>
    </div>
  )
}

export default NFTDetail

const SellNFT: FC = () => {
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
