import { Layout } from 'antd'
import Referral from 'containers/ReferralProgram'
import { NextPage } from 'next'
import Head from 'next/head'
const ReferralPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>WCFI - Refferal Program</title>
        <meta name="description" content="WCFI NFT Market" />
        <link rel="icon" href="/WCFI-logo.svg" />
      </Head>

      <div className="w-1/12 p-5 hidden lg:block" />
      <Layout.Content className="w-full lg:w-11/12 p-5 lg:block">
        <Referral />
      </Layout.Content>
    </>
  )
}
export default ReferralPage
