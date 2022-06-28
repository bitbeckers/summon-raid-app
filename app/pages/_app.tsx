import { Header } from "../components/Header";
import { Web3LoginProvider } from "../contexts/Web3LoginProvider";
import { RGThemeProvider, Flex } from "@raidguild/design-system";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RGThemeProvider>
      <Web3LoginProvider>
        <Flex direction="column" align="center" minH="100vh" w="100%" bg={"gray.800"}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </Web3LoginProvider>
    </RGThemeProvider>
  );
}

export default MyApp;
