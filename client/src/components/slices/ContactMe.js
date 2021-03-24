import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import API from "../../utils/API"

import { Modal, Button, Row, Col } from 'react-bootstrap'

export default function ContactMe() {
  const [showModal, setShowModal] = useState(false);
  const [formObject, setFormObject] = useState({})

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    API.sendMessage({
      firstName: formObject.first,
      lastName: formObject.last,
      email: formObject.email,
      phone: formObject.phone,
      message: formObject.message,
    }).then((response) => {
      if (response.data.status === 'success') {
        console.log("success")
      } else if (response.data.status === 'fail') {
        console.log("message failed")
      }
    })
  }



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
          <p>You can email me at <a href="mailto:colinstevens06@gmail.com" className="email">colinstevens06@gmail.com</a> or fill out <span onClick={handleShow} className="email">this form</span>.</p>
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
                <input name="first" placeholder="First Name" onChange={handleInputChange} />

              </Col>
              <Col>
                <input name="last" placeholder="Last Name" onChange={handleInputChange} />

              </Col>
            </Row>
            <Row>
              <Col>
                <input name="email" placeholder="Email" onChange={handleInputChange} />

              </Col>
              <Col>
                <input name="phone" placeholder="Phone" onChange={handleInputChange} />

              </Col>
            </Row>
            <Row>
              <Col>
                <textarea name="message" placeholder="Tell me about your project" onChange={handleInputChange} />
              </Col>
            </Row>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>

      </Modal>
      <Link to="hero" spy={true} smooth={true} duration={500} className="text__back-to-top">Back to Top</Link>
    </div>
  )
}
