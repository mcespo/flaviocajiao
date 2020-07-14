import React from "react";

export default function location() {
  return (
    <section>
      <h2>Location and Hours Section</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8879678499106!2d-87.77969188429856!3d41.93825867921742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcb8018bea551%3A0xf85baeac436982b3!2sFlavio%20Cajiao%2C%20DDS!5e0!3m2!1sen!2sus!4v1594749243697!5m2!1sen!2sus"
        width="100%"
        height="400"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <article>
        <h3>Location</h3>
        6033 W Belmont Ave, Chicago, IL 60634
      </article>
      <article>
        <h3>Hours</h3>
        <ul>
          <li>Sunday Closed</li>
          <li>Monday 9AM–3PM</li>
          <li>Tuesday 10AM–5PM</li>
          <li>Wednesday 10AM–5PM</li>
          <li>Thursday Closed</li>
          <li>Friday 9AM–3PM</li>
          <li>Saturday 10AM–5PM</li>
        </ul>
      </article>
    </section>
  );
}
