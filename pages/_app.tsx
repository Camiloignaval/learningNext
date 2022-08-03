import { ReactElement } from "react";
import { AppProps } from "../node_modules/next/app";
import { NextPageContext } from "../node_modules/next/dist/shared/lib/utils";
import "../styles/globals.css";

type NextPageWithLayout = NextPageContext & {
  getLayout?: (page: ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
