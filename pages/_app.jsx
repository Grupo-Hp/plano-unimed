import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../components/SeoConfig'
import TagManager from 'react-gtm-module'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    }

    TagManager.initialize(tagManagerArgs)

  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
