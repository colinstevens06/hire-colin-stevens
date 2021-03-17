import React from 'react'
import ContactMe from '../components/slices/ContactMe'
import Hero from '../components/slices/Hero'
import MyProjects from '../components/slices/MyProjects'
import ThisIsMe from '../components/slices/ThisIsMe'

export default function Home() {
  return (
    <div className="container__main-content">
      <Hero />
      <ThisIsMe />
      <MyProjects />
      <ContactMe />
    </div>
  )
}
