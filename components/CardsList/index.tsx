import CardNft from 'components/Card'
import { INft } from 'components/Card/interface'
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

export default CardsList
