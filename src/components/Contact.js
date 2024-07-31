// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact">
//       <h2>Contact Me</h2>
//       <p>Phone: +917898428167 </p>
//       <p>Email: ankitpatellll782@gmail.com.com</p>
//       <p>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">My-linkedin-profile</a></p>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      {/* <p>Email: your-email@example.com</p> */}
      <p>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">My-linkedin-profile</a></p>
    </section>
  );
};

export default Contact;
