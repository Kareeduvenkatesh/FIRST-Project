import React from 'react'
import { Banner } from '../components/banner/banner'
import { Collection } from '../components/collection/collection'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'


export const MainPage = () =>{
  return(
    <div>
      <Banner/>
      <Collection/>
      <Header/>
      <Footer/>
    </div>
  )
}
