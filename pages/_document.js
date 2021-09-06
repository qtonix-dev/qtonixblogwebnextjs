import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/flowerhornfishstoreindia-icon.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="stylesheet" href="/css/style.css" />


        

        <Script src="/js/jquery.js" />
        <body>
          <Main />
          <NextScript />
          
        </body>


      

      </Html>
    )
  }
}

export default MyDocument