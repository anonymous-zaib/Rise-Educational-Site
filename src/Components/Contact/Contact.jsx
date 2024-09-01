import React from 'react'
import './Contact.css'

import msq_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msq_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus omnis earum asperiores illo iure at deserunt delectus, similique nostrum expedita, voluptate quasi non quae nulla excepturi harum mollitia ratione iste?</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@Rise.com</li>
                <li><img src={phone_icon} alt="" /> +92323457346</li>
                <li><img src={location_icon} alt="" /> Islamabad pk, usa , uk</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' autoComplete='off' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your mobile number' autoComplete='off' required />
                <label>Write your message here</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message' autoComplete='off' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /> </button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact
