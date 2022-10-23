import Marketplace from 'containers/Marketplace'
import Head from 'next/head'
const MarketplacePage = () => {
  return (
    <>
      <Head>
        <title>WCFI - Marketplace</title>
        <meta name="description" content="WCFI NFT Market" />
        <link rel="icon" href="/WCFI-logo.svg" />
      </Head>

      <Marketplace />
    </>
  )
}
export default MarketplacePage
