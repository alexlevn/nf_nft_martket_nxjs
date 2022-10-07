import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="debug panchang">
      <Head>
        <title>WCFI NFT MARKET</title>
        <meta name="description" content="WCFI NFT Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-xl font-light text-red-400 p-20 bg-dark min-h-screen">
        WCFI NFT Market
        <div className="px-10 py-3 rounded-md">Button TEST</div>
      </div>
    </div>
  )
}

export default Home
