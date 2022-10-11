import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="panchang">
      <Head>
        <title>WCFI NFT MARKET</title>
        <meta name="description" content="WCFI NFT Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-xl font-light p-5 bg-dark min-h-screen">
        {/* REWARD */}
        <div className="bg-pcgray rounded-xl flex flex-col lg:flex-row justify-around p-10 gap-40 ">
          <div className=" gap-2 justify-center">
            <div className="text-content">Total Reward</div>
            <div className="text-xl lg:text-3xl font-semibold">$8.064.000</div>
            <Image
              src="/images/btn_view_contract.png"
              alt=""
              height={18}
              width={120}
              className="cursor-pointer mx-auto"
            />
          </div>
          <div className="flex flex-col  gap-2">
            <div className="text-content">Participant</div>
            <div className="text-xl lg:text-3xl font-semibold">40.320</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
