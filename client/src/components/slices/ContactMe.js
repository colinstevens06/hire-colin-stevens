import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import API from "../../utils/API"
import ContactModal from '../contact/ContactModal';


export default function ContactMe() {
  const [showModal, setShowModal] = useState(false);

  const [formObject, setFormObject] = useState({})
  const [alertMessage, setAlertMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClose = () => {
    setShowModal(false)
    setAlertMessage('')
  };
  const handleShow = () => setShowModal(true);


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleSubmit(event) {


    event.preventDefault();
    setLoading(true)
    API.sendMessage({
      firstName: formObject.first,
      lastName: formObject.last,
      email: formObject.email,
      phone: formObject.phone,
      message: formObject.message,
    }).then((response) => {
      if (response.data.status === 'success') {
        console.log("success")
        setAlertMessage("Form submitted!")
        setTimeout(function () {
          setLoading(false)
          setShowModal(false)
          setAlertMessage('')
        }, 3000)
      } else if (response.data.status === 'fail') {
        console.log("message failed")
        setAlertMessage("Form submission error - please try again later.")
        setLoading(false)
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
      <ContactModal
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        showModal={showModal}
        alertMessage={alertMessage}
        loading={loading}
        handleInputChange={handleInputChange}
      />

      <Link to="hero" spy={true} smooth={true} duration={500} className="text__back-to-top">Back to Top</Link>
    </div>
  )
}
