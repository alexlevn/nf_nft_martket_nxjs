/* eslint-disable @next/next/no-img-element */
import useWeb3 from 'common/hooks/useWeb3'
import CardNft from 'components/Card'
import { INft } from 'components/Card/interface'
import ModalTrigger from 'components/ModalTrigger'
import NFTDetail from 'components/NFTDetail'
import { FC } from 'react'
import ButtonBuyNft from './ButtonBuyNft'

const CardsListWithBuyButton: FC<{ data: INft[] }> = ({ data }) => {
  const { wallet } = useWeb3()
  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
      {data.length > 0 ? (
        data.map((item, index) => {
          const isYourListAsset =
            wallet?.address.toLowerCase() === item.seller?.toLowerCase()
          return (
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
              renderTrigger={(openModal) => {
                return (
                  <div className="cursor-pointer" onClick={openModal}>
                    <CardNft key={index} item={item} />
                  </div>
                )
              }}
              renderChildren={(closeModal) => (
                <NFTDetail
                  item={item}
                  renderAction={() =>
                    item.listingId && !isYourListAsset ? (
                      <ButtonBuyNft
                        listingId={item.listingId}
                        callbackCloseModal={closeModal}
                      />
                    ) : (
                      <span className="text-white">Your NFT</span>
                    )
                  }
                />
              )}
            />
          )
        })
      ) : (
        <div className="flex-center w-full mt-10">
          <img src="/images/no_data.svg" alt="" className="w-20 h-20" />
        </div>
      )}
    </div>
  )
}

export default CardsListWithBuyButton
