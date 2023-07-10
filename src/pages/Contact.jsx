import React from 'react';

const ContactUs = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" style={textareaStyle}></textarea>
          </div>
          <div style={formGroupStyle}>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '40px 0',
  backgroundColor: '#f8f8f8',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '0 20px',
};

const headingStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const formGroupStyle = {
  margin: '10px 0',
};

const inputStyle = {
  padding: '10px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  padding: '10px',
  width: '100%',
  height: '150px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ContactUs;

