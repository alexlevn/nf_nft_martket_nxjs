import { FC } from 'react'

const Referral: FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-5">
      <div className="w-full lg:w-7/12 flex flex-col gap-5">
        <p className="font-bold text-lg leading-10">Referral Program</p>
        <p className="font-normal text-sm text-scgray leading-6	 ">
          Invite friends with referral link and get up to{' '}
          <span className="text-pcgreen">25%</span> commission every time your
          friends mint NFT.
        </p>

        <div className="rounded-lg bg-pcgray p-5 ">
          <h2 className="text-white font-bold shadow-border pb-8">
            Multi-Level Commission{' '}
          </h2>
          {/* <hr className='border-t border-gray-600 my-5'/> */}
          <div className="flex flex-col gap-5 text-white mt-5 py-5 shadow-border">
            <div className="flex flex-wrap shadow-border pb-5 text-scgray_3">
              <div className="commission-cell ">Level</div>
              <div className="commission-cell">Commission</div>
            </div>

            <div className="flex flex-wrap">
              <div className="commission-cell">1</div>
              <div className="commission-cell">5%</div>
            </div>
            <div className="flex flex-wrap">
              <div className="commission-cell">2</div>
              <div className="commission-cell">5%</div>
            </div>
            <div className="flex flex-wrap">
              <div className="commission-cell">3</div>
              <div className="commission-cell">5%</div>
            </div>
            <div className="flex flex-wrap">
              <div className="commission-cell">4</div>
              <div className="commission-cell">25%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12">My Referral Link</div>
    </div>
  )
}

export default Referral
