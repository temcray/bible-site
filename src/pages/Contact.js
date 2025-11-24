import { useRef } from "react";
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

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

        <h1>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

    </div>
  );
}


export default Contact;