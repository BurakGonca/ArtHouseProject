import React from 'react';
import '../assets/style/contact.scss'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>İletişim</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Adınız</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mesajınız</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit">Gönder</button>
      </form>
      <div className="contact-info">
        <div className="address">
          <h2>Adresimiz</h2>
          <p>Atatürk Cadd. Atatürk Mah. Ankara</p>
        </div>
        <div className="phone">
          <h2>İletişim Numarası</h2>
          <p>0312 123 45 67</p>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
