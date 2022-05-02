import React from 'react'
import Donate from './Donate.module.css'
import Spline from '@splinetool/react-spline';

function index() {
  return (
    <div className={Donate.main} id="Donate-scroll"> 
        <div  id={Donate.title}>
          <h1>
            consider donating?
          </h1>
        </div>
        <div className={Donate.container}>
          
          <div className={Donate.animation}>

            <Spline scene="https://draft.spline.design/WbeRjRzfG2zd00d2/scene.spline" />
          </div>
          <div id={Donate.desc}>
            <h1>You can donate to help keep our site UP & Free</h1>
            <button>Donate Now</button>
          </div>
          
        </div>

    </div>

  )
}

export default index