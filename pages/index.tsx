import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WCFI NFT MARKET</title>
        <meta name="description" content="WCFI NFT Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-xl font-light text-red-400 p-20">
        WCFI NFT Market
      </div>
    </div>
  )
}

export default Home
