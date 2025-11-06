import React from 'react'
import HomeImg from '../assets/HomeImg.png'

const Home = () => {
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