import React from 'react'

function ContactTask() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Message sent successfully!");
  }

  return (
    <center>
    <div className="container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <p>Feel free to contact me!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
          /><br/>

          <input
            type="email"
            placeholder="Your Email"
            required
          /><br/>

          <textarea
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
          
          <br/>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
  


    </div>
    </center>
  )
}

export default ContactTask
