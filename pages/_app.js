
import { SSRProvider } from 'react-bootstrap'
import { ToggleProvider } from '../context/toggle'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 


function MyApp({ Component, pageProps }) {
  return <ToggleProvider><SSRProvider><Component {...pageProps} /></SSRProvider></ToggleProvider>
}

export default MyApp
