
import type { AppProps } from 'next/app'
import { Container } from '@material-ui/core'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/font.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Container fixed>
    <Component {...pageProps} />
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </Container>
}
export default MyApp
