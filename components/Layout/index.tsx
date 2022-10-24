/* eslint-disable @next/next/no-img-element */
import { Layout } from 'antd'
import TopNavigationHeader from './TopNavigationHeader'

const AppLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Layout className="min-h-screen bg-dark text-white panchang">
      <TopNavigationHeader />
      <Layout className="flex justify-between mt-20  px-0 lg:px-14 flex-col lg:flex-row ">
        {children}
      </Layout>
    </Layout>
  )
}

export default AppLayout
