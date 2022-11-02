/* eslint-disable @next/next/no-img-element */
import { ButtonGradient } from 'components/ButtonGradient'
import CardNft from 'components/Card'
import { INft } from 'components/Card/interface'
import ModalTrigger from 'components/ModalTrigger'
import NFTDetail from 'components/NFTDetail'
import { FC } from 'react'
import SellNft from './SellNft'

const CardsListWithSellModal: FC<{ data: INft[] }> = ({ data }) => {
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
            renderChildren={(_) => (
              <NFTDetail
                item={item}
                renderAction={() => (
                  <ModalTrigger
                    title={
                      <div className="text-white panchang text-sm">
                        Sell NFT
                      </div>
                    }
                    footer={null}
                    closeIcon={
                      <div className="text-white font-sans text-xl font-thin">
                        x
                      </div>
                    }
                    renderTrigger={(openModal) => (
                      <ButtonGradient
                        onClick={openModal}
                        className="py-1 text-base"
                      >
                        Sell
                      </ButtonGradient>
                    )}
                    renderChildren={(closeModal) => (
                      <SellNft
                        tokenId={item.tokenId}
                        tokenAddress={item.tokenAddress}
                        callbackCloseModalNFTDetail={closeModal}
                      />
                    )}
                  />
                )}
              />
            )}
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

export default CardsListWithSellModal
