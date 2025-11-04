import React, { useEffect } from 'react'
import PopularToys from '../../Pages/AllToys/PopularToys/PopularToys.jsx';
import Slider from '../../Pages/AllToys/Slider/Slider.jsx';
import MoreToys from '../../Pages/AllToys/MoreToys/MoreToys.jsx';
import DiscountBanner from '../Banner/DiscountBanner.jsx';

const Home = () => {

  useEffect(() => {
      document.title = "Home";
    });
  return (
    <div>
      <DiscountBanner/>
      <Slider/>
      <PopularToys/>
      <MoreToys/>
    </div>
    
  )
}
export default Home;
