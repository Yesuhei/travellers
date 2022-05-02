import React from 'react'
import contact from './contact.module.css'
import {BsFillPersonFill} from 'react-icons/bs';

function index() {
    const iconStyles = { color: "white", fontSize: "5em"};
  return (
    
    <div className={contact.main} id="Contact-scroll">
        <div id={contact.ContactUs}>
            
            <h1>contact us</h1></div>
        <div className={contact.container}>
            <div className={contact.team_item}>
                <BsFillPersonFill style={iconStyles} />
                <h1>Yesukhei</h1>
                <p className={contact.role}>Senior</p>
                <p className={contact.phone}>99400887</p>
                <p className={contact.email}>yesuhei0524@gmail.com</p>
                
            </div>
            <div className={contact.team_item}>
                <BsFillPersonFill style={iconStyles} />
                <h1>Enkhjin</h1>
                <p className={contact.role}>Developer</p>
                <p className={contact.phone}>89206766</p>
                <p className={contact.email}>enhjin27@gmail.com</p>
            </div>
            <div className={contact.team_item}>
                <BsFillPersonFill style={iconStyles} />
                <h1>Zoljargal</h1>
                <p className={contact.role}>Devops Engineer</p>
                <p className={contact.phone}>88324020</p>
                <p className={contact.email}>zoljargal0916@gmail.com</p>
            </div>
            <div className={contact.team_item}>
                <BsFillPersonFill style={iconStyles} />
                <h1>Enkhbileg</h1>
                <p className={contact.role}>QA Engineer</p>
                <p className={contact.phone}>88281829</p>
                <p className={contact.email}>kagam2389@gmail.com</p>
            </div>
        </div>
    </div>
    
  )
}

export default index