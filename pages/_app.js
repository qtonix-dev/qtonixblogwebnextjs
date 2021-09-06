// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import App from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'
import '../styles/globals.css'

import NextNprogress from 'nextjs-progressbar';

class MyApp extends App {
  render(){
    const {Component,pageProps} = this.props;
    return(
      <Provider store={store}>
        <NextNprogress
  color="#29D"
  startPosition={0.3}
  height={3}
/>
          <Component {...pageProps}></Component>
      </Provider>
    )
  }
}


const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);