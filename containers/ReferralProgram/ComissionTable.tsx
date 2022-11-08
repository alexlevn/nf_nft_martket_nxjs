import { FC } from 'react'

const CommissionTable: FC = () => {
  return (
    <div className="rounded-lg bg-pcgray p-5 ">
      <h2 className="text-white font-bold shadow-border pb-8">
        Multi-Level Commission
      </h2>
      <div className="flex flex-col gap-5 text-white mt-5 py-5 shadow-border">
        <div className="flex flex-wrap shadow-border pb-5 text-scgray_3">
          <div className="commission-cell ">Level</div>
          <div className="commission-cell">Commission</div>
        </div>

        <div className="flex flex-wrap">
          <div className="commission-cell">1</div>
          <div className="commission-cell">10%</div>
        </div>
        <div className="flex flex-wrap">
          <div className="commission-cell">2</div>
          <div className="commission-cell">10%</div>
        </div>
        <div className="flex flex-wrap">
          <div className="commission-cell">3</div>
          <div className="commission-cell">10%</div>
        </div>
        <div className="flex flex-wrap">
          <div className="commission-cell">4</div>
          <div className="commission-cell">30%</div>
        </div>
      </div>
    </div>
  )
}

export default CommissionTable
