import Head from 'next/head';
import {createMuiTheme} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {type: 'dark'}
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0"/>
      </Head>
      <ThemeProvider theme={theme}> 
        <Component {...pageProps} />
      </ThemeProvider>
    </>
    )
}
export default MyApp;
