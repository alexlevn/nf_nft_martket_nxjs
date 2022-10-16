import type { NextPage } from 'next'
import Home from 'containers/Home'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>WCFI NFT MARKET</title>
        <meta name="description" content="WCFI NFT Market" />
        <link rel="icon" href="/WCFI-logo.svg" />
      </Head>

      <div className="flex">
        <span className="menu_item_gradient">Test font</span>
      </div>
      <Home />
    </>
  )
}

export default HomePage
