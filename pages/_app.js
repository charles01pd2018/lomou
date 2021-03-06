// dependencies
import { useEffect } from 'react';
// styles
import '../styles/styles.scss'


const LomouApp = ({ Component, pageProps }) => {

  useEffect( () => {
    document.body.classList?.remove('loading')
  }, [] );

  return (
    <Component {...pageProps} />
  );
}

export default LomouApp;
