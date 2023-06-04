import { GlobalDataProvider } from "@/context/GlobalDataContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <GlobalDataProvider>
      <AnyComponent {...pageProps} />
    </GlobalDataProvider>
  );
}
