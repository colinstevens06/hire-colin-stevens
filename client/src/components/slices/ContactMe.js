import React from 'react'
import { Link } from 'react-scroll'

export default function ContactMe() {
  return (
    <div className="image__background hero-image__contact-me" name="contact">
      <div className="container-text__contact-me">
        <div className="header__contact-me">Contact Me</div>
        <div className="body-copy__contact-me">
          <p>Want to work together? I can help with:</p>
          <ul>
            <li>Full-Stack Web Development</li>
            <li>Photography</li>
            <li>Writing Web Copy</li>
            <li>Marketing</li>
            <li>Live Events</li>
            <li>Music</li>

          </ul>
          <p>Fill out this form or email me at colinstevens06@gmail.com.</p>
        </div>
      </div>
      <Link to="hero" spy={true} smooth={true} duration={500} className="text__back-to-top">Back to Top</Link>
    </div>
  )
}
