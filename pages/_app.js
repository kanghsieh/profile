import '../styles/globals.scss'
import Layout from '../components/layout/layout'
import { NavPointer } from '../context/ref-state';
import { ScrollPointer } from '../context/scroll-state';

function MyApp({ Component, pageProps }) {
  return (
    <NavPointer>
      <ScrollPointer>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollPointer>
    </NavPointer>
  )
}

export default MyApp
