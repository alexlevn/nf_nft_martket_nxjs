/* eslint-disable @next/next/no-img-element */
import CardNft, { CardNftMookup } from 'components/Card'
import { INft } from 'components/Card/interface'
import ModalTrigger from 'components/ModalTrigger'
import NFTDetail from 'components/NFTDetail'
import { FC } from 'react'

const CardsList: FC<{ data: INft[] }> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
      {data.map((item, index) => (
        <CardNft key={index} item={item} />
      ))}
    </div>
  )
}

export const CardsListWithSellModal: FC<{ data: INft[] }> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
      {data.length > 0 ? (
        data.map((item, index) => (
          <ModalTrigger
            key={index}
            title={
              <div className="text-white panchang text-sm">NFT Details</div>
            }
            width={700}
            footer={null}
            closeIcon={
              <div className="text-white font-sans text-xl font-thin">x</div>
            }
            renderTrigger={(openModal) => (
              <div className="cursor-pointer" onClick={openModal}>
                <CardNft key={index} item={item} />
              </div>
            )}
            renderChildren={(closeModal) => <NFTDetail item={item} />}
          />
        ))
      ) : (
        <div className="flex-center w-full mt-10">
          <img src="/images/no_data.svg" alt="" className="w-20 h-20" />
        </div>
      )}
    </div>
  )
}

export default CardsList

// MOCKUP DATA ----------------------
export const CardsListMookup: FC<{ data: number[] }> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
      {data.map((item, index) => (
        <CardNftMookup key={index} tier={index} item={item} />
      ))}
    </div>
  )
}
