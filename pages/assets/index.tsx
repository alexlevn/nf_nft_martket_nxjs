import { Layout } from 'antd'
import { NextPage } from 'next'

const AssetsPage: NextPage = () => (
  <>
    <div className="w-1/12 p-5 hidden lg:block" />
    <Layout.Content className="w-full lg:w-11/12 p-5 lg:block">
      <div>assets</div>
    </Layout.Content>
  </>
)

export default AssetsPage
