import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import React from 'react'
import {
  DefaultCustomAppContext,
  CustomAppContext,
} from '../lib/custom-app-context'

export default function CustomApp({
  Component,
  pageProps,
  customAppContext,
}: AppProps & { customAppContext: CustomAppContext }) {
  const customAppContextRef = React.useRef(customAppContext) // Hack to persist SSR data since there's no `ctx.req` during client navigation
  return (
    <DefaultCustomAppContext.Provider value={customAppContextRef.current}>
      <Component {...pageProps} />
    </DefaultCustomAppContext.Provider>
  )
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const customAppContext: CustomAppContext = {
    host: appContext.ctx.req?.headers.host,
  }
  return { ...appProps, customAppContext }
}
