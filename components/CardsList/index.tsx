import CardNft from 'components/Card'
import { FC } from 'react'

const CardsList: FC<{ data: number[] }> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center flex-wrap gap-5 mt-10 ">
      {data.map((item, index) => (
        <CardNft key={item} tier={index} />
      ))}
    </div>
  )
}

export default CardsList
