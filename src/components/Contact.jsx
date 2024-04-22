import React, {useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Send form data to Formspree endpoint
      fetch('https://formspree.io/f/mqkrwdnl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            alert('Message sent successfully!');
            // Reset form data after successful submission
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            });
          } else {
            alert('Error sending message. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error sending message. Please try again.');
        });
    };
  
    return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-section">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default ContactForm;