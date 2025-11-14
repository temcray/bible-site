import { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data subitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", emali: "", message: "", });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>You can reach us at <strong>contact@Stillwaters.com</strong></p>

      {submitted ? (
        <p className="thank-you">Thank you for your message! God bless you</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange} 
          required
          />

          <label>Email:</label>
          <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          />

          <label>Message:</label>
          <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          >
          </textarea>

          <button type="submit">Send Message</button>
        </form>
        )}
    </div>
    );
  }

          


export default Contact;