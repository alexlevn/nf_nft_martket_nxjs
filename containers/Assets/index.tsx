/* eslint-disable @next/next/no-img-element */
import CardsList from 'components/CardsList'

const Assets = () => {
  const total = 6
  return (
    <div className="">
      {/* Total Volume */}

      {/* Filter Form */}
      <div className="flex flex-col lg:flex-row justify-between  items-start gap-5">
        <div className="flex gap-5">
          <span className="text-white block pb-1 border-b-2 border-white cursor-pointer">
            My assets ({total})
          </span>
          <span className="text-scgray cursor-pointer">Listing (3)</span>
        </div>

        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="btn-dropdown">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Table */}
      <CardsList data={Array.from(Array(6).keys())} />
    </div>
  )
}

export default Assets
