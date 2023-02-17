import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import   {hello}  from "./api/";

export default function App({ Component, pageProps }: AppProps) {
  
  

  return <Component {...pageProps} />
}
