import '../styles/globals.scss'
import Layout from '../components/layout/layout'
import { NavPointer } from '../context/ref-state';

function MyApp({ Component, pageProps }) {
  return (
    <NavPointer>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavPointer>
  )
}

export default MyApp
