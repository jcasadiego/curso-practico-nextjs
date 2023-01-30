import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return(
            <Html lang='en'>
                <Head />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-GP4B6ZP28K"></script>
                <script dangerouslySetInnerHTML={{
                    __html:
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GP4B6ZP28K')`
                }} />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};

export default MyDocument;