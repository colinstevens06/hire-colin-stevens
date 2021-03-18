import React from 'react'
import ProjectsCarousel from '../my-projects/ProjectsCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

export default function MyProjects() {
  return (
    <div className="image__background hero-image__my-projects" name="projects">
      <div className="header__my-projects">My Projects</div>
      <ProjectsCarousel />
      <div className="container__right-arrows">
        <Link to="this-is-me" spy={true} smooth={true} duration={750}>
          <FontAwesomeIcon icon={faLongArrowAltUp} className="arrows__projects" />
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={750}>
          <FontAwesomeIcon icon={faLongArrowAltDown} className="arrows__projects" />
        </Link>
      </div>
    </div>
  )
}
