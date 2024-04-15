import React, { useState } from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import Exploremenu from '../../Component/ExploreMenu/Exploremenu'
import Fooddisplay from '../../Component/Fooddisplay/Fooddisplay'
import Appdownload from '../../Component/Appdownload/Appdownload'


const Home = () => {
    const[category,setCategory]=useState("All")
  return (
    <div>
        <Header/>  
        < Exploremenu category={category} setCategory ={setCategory}/>
        <Fooddisplay category={category} setCategory={setCategory}/>
        <Appdownload/>
    </div>
  )
}

export default Home