import React, { useEffect } from 'react'
import HomeImg from '../assets/HomeImg.png'

const Home = () => {

useEffect(() => {
  const img = new Image()
  img.src= HomeImg
},[])

  return (
<div className="container">
    <div className="row">
        <figure className='img__wrapper'>
            <img src={HomeImg} alt="" className="home__img" />
        </figure>
    </div>
</div>
  )
}

export default Home