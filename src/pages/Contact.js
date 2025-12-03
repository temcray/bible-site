import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8g2t8fn",
        "template_jop8d62",
        form.current,
        "A6-dQ2jUrUdz2ncDP"
      )
      .then(
        () => {
          setSent(true);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Message failed to send.");
        }
      );
  };

  return (
    <div className="contact-page">
      <section className="card">

        <h1>Contact Us</h1>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />


          <label>Prayer Request Field:</label>
          <textarea
            name="prayer_request"
            rows="4"
            placeholder="Write your prayer request here"
            className="input" />
          <button type="submit" className="submit-bin">Send Message</button>
        </form>

        {sent && <p className="success">Your message has been sent!</p>}

      </section>
    </div>

  );
}


export default Contact;