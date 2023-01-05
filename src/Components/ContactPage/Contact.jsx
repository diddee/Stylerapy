import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='Contact'>
      <Nav />

      <div className='Form'>
        <div className="Intro">
          <h2>Contact Us</h2>
          <p>Please fill in the form to reach out...</p>
        </div>
        <div className="Form">
          <form action="https://getform.io/f/52981559-d475-4711-9999-42d17a4dc909" method="POST">
            <input type="text" name="name" placeholder='Your Name'/>
            <input type="text" name="email" placeholder='Your Email'/>
            <input type="text" name="subject" placeholder='Subject'/>
            <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message'></textarea>
            <button className='Btn'>Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact

