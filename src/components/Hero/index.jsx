import React from 'react'
import Hero from './Hero.module.css'
function index() {
    const banner = require('./edited.png');
  return (
    <div className={Hero.main}>
        <div className={Hero.banner}>
            <img src={banner} alt="banner" id={Hero.bannerIMG}/>
        </div>
        <div className={Hero.quote}>
            <h1>Welcome to Mongolia</h1>
        </div>
        <div className={Hero.quote}>
            <span>Not all those who <span id={Hero.highlight}>wander</span> are lost</span>
        </div>
    </div>
  )
}

export default index