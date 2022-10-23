const Marketplace = () => {
  const total = 96999
  return (
    <div className="">
      <div className="flex justify-between  items-center">
        <span className="font-semibold">Items (Total {total})</span>
        <div className="flex gap-5">
          <div className="font-normal px-5 py-2 border-2 border-red-500 inline-block">
            Newest
          </div>
          <div className="font-normal px-5 py-2 border border-red-500 inline-block text-red-400">
            Filter
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
