const Marketplace = () => {
  const total = 6969
  return (
    <div className="">
      <div className="flex flex-col justify-between  items-start gap-5">
        <span className="font-semibold">Items (Total {total})</span>
        <div className="flex gap-5 flex-col">
          <div className="font-normal px-5 py-2 border inline-block rounded-md border-scgray_4 text-sm">
            Newest
          </div>
          <div className="font-normal px-5 py-2 border inline-block rounded-md border-scgray_4 text-sm">
            Filter
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
