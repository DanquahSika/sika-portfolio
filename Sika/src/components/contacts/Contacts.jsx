import React from 'react'
import './contact.css'

const Contacts = () => {
  return (
   <div>
  <section className="contact section bd-container" id="contact">
    <span className="section-subtitle">Let's help you in your projects</span>
    <h2 className="section-title">Contact Me</h2>
    <div className="contact__container bd-grid">
      <div className="contact__content bd-grid">
        <div className="contact__box">
          <i className="bx bxs-home contact-icon" />
          <h3 className="contact__title">Location</h3>
          <span className="contact__desc">#123 Cairo - Egypt</span>
        </div>
        <div className="contact__box">
          <i className="bx bxs-phone contact-icon" />
          <h3 className="contact__title">Phone</h3>
          <span className="contact__desc">+201x-xxxx-xxxx</span>
        </div>
        <div className="contact__box">
          <i className="bx bxs-envelope contact-icon" />
          <h3 className="contact__title">E-mail</h3>
          <span className="contact__desc">m.selim@gmail.com</span>
        </div>
        <div className="contact__box">
          <i className="bx bxs-chat contact-icon" />
          <h3 className="contact__title">Chat</h3>
          <a href="#" className="contact__social"><i className="bx bxl-whatsapp" />
          </a><a href="#" className="contact__social"><i className="bx bxl-messenger" />
          </a><a href="#" className="contact__social"><i className="bx bxl-telegram" />
          </a>
        </div>
      </div>
      <form action className="contact__form">
        <div className="contact__inputs">
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="email" placeholder="Email" className="contact__input" />
        </div>
        <div className="contact__inputs">
          <input type="text" placeholder="Project" className="contact__input" />
          <input type="number" placeholder="Phone-number" className="contact__input" />
        </div>
        <textarea className="contact__input" placeholder="Message" name id cols={0} rows={7} defaultValue={""} />
        <div className="send__button"><input type="submit" defaultValue="Send" className="button contact__button" /></div></form>
    </div>
  </section>
 
</div>

  ) 
}

export default Contacts