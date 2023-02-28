import React from 'react'
import Category from '../../Components/category/Category'
import Contact from '../../Components/Contact/Contact'
import FeatureProducts from '../../Components/Featured Products/FeatureProducts'
import Slider from '../../Components/Slider/Slider'
import './Home.css'

function Home() {
  return (
    <div>
      <Slider/>
      <FeatureProducts type="featured"/>
      <Category/>
      <FeatureProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home