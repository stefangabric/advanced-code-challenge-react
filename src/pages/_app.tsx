import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import React from 'react';
import {FavoriteProvider} from "@/Context/FavoriteContext";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (<QueryClientProvider client={queryClient}>
            <FavoriteProvider>
              <Header/>
              <Component {...pageProps} />
              <Footer/>
            </FavoriteProvider>
        </QueryClientProvider>)
}
