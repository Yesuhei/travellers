import React from 'react'
import Footer from './footer.module.css'
function index() {
  return (
    <div className={Footer.main}>
        <div className={Footer.container}>
            <h1 id={Footer.Logo}>TRAVELLERS</h1>
        </div>
        <div className={Footer.container}>
            <p>Travel before you die</p>
        </div>
        <div id={Footer.copyright}>
            <p>Copyright © 2022.</p>
        </div>
        


    </div>
  )
}

export default index