/* eslint-disable @next/next/no-img-element */
import { ButtonGradient } from 'components/ButtonGradient'
import CardNft, { CardNftMookup, getTeam, INft } from 'components/Card'
import ModalTrigger from 'components/ModalTrigger'
import { getFontColorClassname } from 'components/TiersList'
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
      {data.map((item, index) => (
        <ModalTrigger
          key={index}
          title={<div className="text-white panchang text-sm">NFT Details</div>}
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
      ))}
    </div>
  )
}

export default CardsList

const NFTDetail: FC<{ item: INft }> = ({ item }) => {
  const team = getTeam(item)
  const image = item.image.replaceAll('https://wcfi.wii.camp/public', '')

  return (
    <div className="flex flex-col lg:flex-row py-5">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex-center overflow-hidden debug h-60">
        <img
          // TODO: path image
          src={image}
          alt=""
          placeholder="blur"
          className=""
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
          <ButtonGradient
            onClick={() => {
              console.log('sell')
            }}
            className="py-1 text-base"
          >
            Sell
          </ButtonGradient>
        </div>
      </div>
    </div>
  )
}

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
