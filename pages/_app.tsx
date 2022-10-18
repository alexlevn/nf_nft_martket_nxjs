import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from 'components/Layout'
import { Web3Provider } from 'common/hooks/useWeb3'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Web3Provider>
  )
}

export default MyApp
