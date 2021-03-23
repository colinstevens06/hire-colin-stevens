import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'

import { Modal, Button, Row, Col } from 'react-bootstrap'

export default function ContactMe() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


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
          <p>You can email me at <a href="mailto:colinstevens06@gmail.com" className="email">colinstevens06@gmail.com</a> or fill out <span onClick={handleShow}>this form</span>.</p>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form__contact">
            <Row>
              <Col>
                <input name="first-name" placeholder="First Name" />

              </Col>
              <Col>
                <input name="last-name" placeholder="Last Name" />

              </Col>
            </Row>
            <Row>
              <Col>
                <input name="email" placeholder="Email" />

              </Col>
              <Col>
                <input name="phone" placeholder="Phone" />

              </Col>
            </Row>
            <Row>
              <Col>
                <textarea name="message" placeholder="Tell me about your project" />
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>

      </Modal>
      <Link to="hero" spy={true} smooth={true} duration={500} className="text__back-to-top">Back to Top</Link>
    </div>
  )
}
