import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'


export default function ThisIsMe() {
  return (
    <div className="image__background no-overlay hero-image__this-is-me" name="this-is-me">
      <div className="container__this-is-me-text">
        <h2 className="header__this-is-me text-black">This is Me!</h2>
        <p>I’m a creative person with a passion for life.</p>

        <p>I love building interactive JS applications, learning new ways to improve my code, and finding solutions to complex problems.</p>

        <p>In my spare time, you’ll find me outside, playing music or taking photos (including the photos on this site).</p>
      </div>
      <div className="container__right-arrows">
        <Link to="hero" spy={true} smooth={true} duration={750}>
          <FontAwesomeIcon icon={faLongArrowAltUp} className="arrows__this-is-me" />
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={750}>
          <FontAwesomeIcon icon={faLongArrowAltDown} className="arrows__this-is-me" />
        </Link>
      </div>
    </div>
  )
}