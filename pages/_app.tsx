import { SWRConfig } from "swr";
import "../global.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: any) {
    return (
        <SWRConfig
            value={{
                fetcher: (url: string) =>
                    fetch(url).then((response) => response.json()),
            }}
        >
            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        </SWRConfig>
    );
}
