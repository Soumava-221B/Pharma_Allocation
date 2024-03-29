import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from '../UserProvider';
import { NhostProvider, NhostClient } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo'

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>{

        <UserProvider>
          <Component {...pageProps} />
          <Toaster />
        </UserProvider>
      }</NhostApolloProvider>
    </NhostProvider>

  );
}

export default MyApp;
