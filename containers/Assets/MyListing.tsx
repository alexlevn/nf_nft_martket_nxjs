import { FC } from 'react'
import { INft } from 'components/Card/interface'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import CardsListWithUnListButton from 'components/CartListWithCancelSellButton'

const MyListing: FC<{
  listingData: INft[]
  callbackCancelListingNftSuccess: (listingId: string) => void
}> = ({ listingData, callbackCancelListingNftSuccess }) => {

  return (
      <CardsListWithUnListButton
        data={listingData}
        callbackCancelListingNftSuccess={callbackCancelListingNftSuccess}
      />
  )
}

export default MyListing
