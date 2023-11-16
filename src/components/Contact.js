// Contact.js
import React from 'react';
import '../App.css';

function Contact() {
  return (
    <div className="contact-wrapper" id="contact-wrapper">
      <section className="py-3 py-md-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">Contact Me</h2>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="contact-form">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" rows="4"></textarea>
                  </div>
                  <button type="submit" className='btn-main-offer'>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
