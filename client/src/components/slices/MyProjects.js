import React from 'react'
import ProjectsCarousel from '../my-projects/ProjectsCarousel'

export default function MyProjects() {
  return (
    <div className="image__background hero-image__my-projects">
      <div className="header__my-projects">My Projects</div>
      <ProjectsCarousel />
    </div>
  )
}
