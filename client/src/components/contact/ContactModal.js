import React from 'react'
import { Modal, Button, Row, Col, Alert } from 'react-bootstrap'


export default function ContactModal(props) {

  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Me</Modal.Title>
        {(props.alertMessage === "Form submitted!") && (
          <Alert variant='success'>{props.alertMessage}</Alert>
        )}
        {(props.alertMessage === "Form submission error - please try again later.") && (
          <Alert variant='success'>{props.alertMessage}</Alert>
        )}



      </Modal.Header>
      <Modal.Body>
        <form className="form__contact">
          <Row>
            <Col>
              <input name="first" placeholder="First Name" onChange={props.handleInputChange} required />

            </Col>
            <Col>
              <input name="last" placeholder="Last Name" onChange={props.handleInputChange} required />

            </Col>
          </Row>
          <Row>
            <Col>
              <input name="email" placeholder="Email" onChange={props.handleInputChange} required />

            </Col>
            <Col>
              <input name="phone" placeholder="Phone" onChange={props.handleInputChange} required />

            </Col>
          </Row>
          <Row>
            <Col>
              <textarea name="message" placeholder="Tell me about your project" onChange={props.handleInputChange} required />
            </Col>
          </Row>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
          </Button>
        <Button variant="primary" disabled={props.loading} onClick={props.handleSubmit}>
          Submit
          </Button>
      </Modal.Footer>

    </Modal>
  )
}
