import { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link ref="manifest" href="/manifest.json" />
                    <link ref="apple-touch-icon" href="/icon.png" />
                    <link ref="theme-color" content="#fff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
