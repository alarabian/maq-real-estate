import React from 'react'

const ContactForm = () => {
  return (
    <>
    <form className="contactForm">
      <h4>Get in Touch</h4>
      <div className="form-group mb-3">
        <input type="text" placeholder='Enter Full Name' className='form-control'/>
      </div>
      <div className="form-group mb-3">
        <input type="mail" placeholder='Enter Your Mail' className='form-control'/>
      </div>      
      <div className="form-group mb-3">
        <textarea placeholder='Your Message' rows={3} className='form-control'></textarea>
      </div>
      <div className="form-group">
        <button className='btn btn-primary' type='button'>Submit</button>
      </div>
    </form>
    </>
  )
}

export default ContactForm