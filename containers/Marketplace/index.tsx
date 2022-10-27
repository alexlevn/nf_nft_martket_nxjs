/* eslint-disable @next/next/no-img-element */
import { Dropdown, Menu } from 'antd'
import { ButtonBorderGradient } from 'components/ButtonBorderGradient'
import CardsList from 'components/CardsList'

const Marketplace = () => {
  const total = 6969

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <>
              <a target="_blank">Newest</a>
              <img src="/images/check.svg" alt="" className="h-5 w-5" />
            </>
          ),
        },

        {
          key: '2',
          label: <a target="_blank">Price: high to low</a>,
        },
        {
          key: '3',
          label: <a target="_blank">Price: low to high</a>,
        },
      ]}
    />
  )

  return (
    <div className="">
      {/* Total Volume */}

      {/* Filter Form */}
      <div className="flex flex-col lg:flex-row justify-between  items-start gap-5">
        <span className="font-semibold">Items (Total {total})</span>

        <div className="flex gap-5 flex-col lg:flex-row">
          <Dropdown
            // open={true}
            overlay={menu}
          >
            <div className="btn-dropdown">
              Newest
              <img src="/images/arrow_down.svg" alt="" className="h-3 w-3" />
            </div>
          </Dropdown>

          <div className="btn-dropdown">
            Filter
            <img src="/images/filter.svg" alt="" className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Table */}
      <CardsList data={Array.from(Array(20).keys())} />

      {/* Load More */}
      <div className="flex-center mt-10">
        <ButtonBorderGradient className="px-10 py-3">
          Load more
        </ButtonBorderGradient>
      </div>
    </div>
  )
}

export default Marketplace
