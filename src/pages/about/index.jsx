import React from 'react'
import About from './about.module.css'
function index() {
  return (
    <div className={About.main} id="About-scroll">
        <div className={About.title}>
            <h1>-Our Mission-</h1>
            <p>The vision of travellers.mn is to make it easy to choose Mongolia as a travel destination and to promote a more sustainable form of travel.</p>
        </div>
        <div className={About.title}>
            <h1>-Statement-</h1>
            <p>We have made every effort to trace copyright holders, but if any have been overlooked, we will be pleased to make the necessary accreditations at the first opportunity. Users should not share, tag or publish content that violates the rights of others.</p>
        </div>
        <div className={About.title}>
            <h1>-Disclaimer-</h1>
            <p>You should always check the accuracy of the information provided with the relevant supplier. Innovation Norway is under no circumstances responsible for the contents of external web pages linking to its website.</p>
        </div>
        
    </div>
  )
}
export default index