import React from 'react';
import './Contact.scss';

export default function Contact() {
   
  return (
    <div>
       <div className='contact__container'>
        <div className="left">
            <div className="upper">
            <p className='f1'>Call To Us</p>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: &nbsp; +888-7889-9999</p>
            </div>
            <div className="lower">
                <p className='f1'> Write to Us</p>
                <p>Fill out our form we will contact you within 24 hours.</p>
                <p>Email: &nbsp;ambula@gmail.com</p>
                <p>Email: &nbsp;ambulaExpert@gmail.com</p>
            </div>
        </div>
        <div className="right">
            <form onSubmit={()=>alert('form submitted successfully')}>

            <div className="info">
                <input type="text" placeholder='Your Name'  required minLength={3}/>
                <input type="email" placeholder='Your Email' required />
                <input type="number" placeholder='Your Phone' required />
            </div>
            <textarea  cols="20" rows="10" placeholder='Your Message'></textarea>
            <div className="submit__btn">
                <button >Send Message</button>
            </div>
            </form>
        </div>
      
    </div>
      
    </div>
  )
}
