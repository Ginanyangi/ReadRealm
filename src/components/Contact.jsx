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
      <form className="contact-form bg-brown-800 p-8 rounded-lg" onSubmit={handleSubmit}>
        <div className="name-section flex space-x-4 mb-4">
        <label className="block text-white mb-1" htmlFor="firstName">First Name</label>  
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-3  rounded-md-border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          
           <label className="block text-white mb-1" htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          
        </div>
        <div className="mb-4">
        <label className="block text-white mb-1" htmlFor="email">Email</label>  
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          required
        />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          rows='4'
          required
        /> <br />
        <button type="submit" className="bg-red-950 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none text-center">Submit</button>
      </form>
    );
  };
  
  export default ContactForm;