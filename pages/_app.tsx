import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store, wrapper } from "../store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = React.useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Head>
              <title>WRT</title>
            </Head>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
