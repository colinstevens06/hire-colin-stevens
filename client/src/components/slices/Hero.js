import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'



export default function Hero() {
  return (
    <div className="image__background hero-image" name="hero">
      <div className="hero-image-text-overlay">
        <div className="hero-image-text-overlay__header">Colin Stevens</div>
        <div className="hero-image-text-overlay__subheader">&nbsp;Web Developer<br />&nbsp;Photographer<br />&nbsp;Musician<br />&nbsp;Rad Dude</div>
      </div>
      <Link to="this-is-me" spy={true} smooth={true} duration={750}>
        <FontAwesomeIcon icon={faLongArrowAltDown} className="down-arrow" />
      </Link>
    </div>
  )
}
