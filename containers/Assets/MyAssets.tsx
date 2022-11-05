import { FC } from 'react'
import CardsListWithSellModal from 'components/CartListWithSellModal'
import { INft } from 'components/Card/interface'

const LIMIT = 20

const MyAssets: FC<{
  myAssets: INft[]
  callbackListingNftSuccess: (tokenId: string) => void
}> = ({ myAssets, callbackListingNftSuccess }) => {

  return (
      <CardsListWithSellModal data={myAssets} callbackListingNftSuccess={callbackListingNftSuccess}/>
  )
}

export default MyAssets