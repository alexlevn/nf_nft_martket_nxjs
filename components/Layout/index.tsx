/* eslint-disable @next/next/no-img-element */
import { Layout } from 'antd'
import Sidebar from './Sidebar'
import TopNavigationHeader from './TopNavigationHeader'

const AppLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Layout className="min-h-screen bg-dark text-white panchang">
      <TopNavigationHeader />
      <Layout className="flex justify-between mt-20  px-0  lg:px-14   flex-col lg:flex-row ">
        <div className="w-1/12 p-5 hidden lg:block" />
        <Layout.Content className="w-full lg:w-8/12 p-5 lg:block">
          {children}
        </Layout.Content>
        <Sidebar />
      </Layout>
    </Layout>
  )
}

export default AppLayout
