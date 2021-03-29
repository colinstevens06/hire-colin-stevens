import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

// importing images
import img1 from '../../assets/images/projects/life-organizer.png'
import img2 from '../../assets/images/projects/baltimore-happy-hour.png'
import img3 from '../../assets/images/projects/lies-from-granny.png'
import { Link } from 'react-router-dom'




export default function ProjectsCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item interval={12000}>
        <div className="header__projects-slider-item">Life Organizer</div>
        <div className="container__slider-item">
          <div className="text__project-slider-item">
            <p>This MERN project uses authentication, protected routes and a MongoDB database to store information.</p>
            <p>I used Firebase to handle the authentication, then I use that authentication to serve up content specific to the user logged in.</p>
            <p>Also found in this project: SASS, form handling, error handling</p>
            <p><Link to="https://life-organizer-by-colin.herokuapp.com/" target="_blank">Visit the site</Link> or <Link to="https://github.com/colinstevens06/Life-Organizer" target="_blank">view the repo</Link>.</p>
          </div>
          <div className="image__project-slider-item">
            <img src={img1} alt="Lies From Granny" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={12000}>
        <div className="header__projects-slider-item">Baltimore Happy Hours</div>
        <div className="container__slider-item">
          <div className="text__project-slider-item">
            <p>This MERN project uses a lot of data and has state changes based on user interaction. </p>
            <p>I created the API for this and use that API to populate templated pages.</p>
            <p>I also placed an emphasis on creating a smooth user experience on mobile.</p>
            <Link to="https://www.baltimorehappyhour.com/" target="_blank">Visit the site</Link>
          </div>
          <div className="image__project-slider-item">
            <img src={img2} alt="Lies From Granny" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={12000}>
        <div className="header__projects-slider-item">Lies From Granny</div>
        <div className="container__slider-item">
          <div className="text__project-slider-item">
            <p>My band needed a website, so I designed this using React.</p>
            <p>I wanted to create a simple design with photos being the emphasis of the design.</p>
            <p>I used React for the front-end and SASS for styling.</p>
            <p><Link to="http://liesfromgranny.com/" target="_blank">Visit the site</Link> or <Link to="https://github.com/colinstevens06/Lies-From-Granny" target="_blank">view the repo</Link>.</p>
          </div>
          <div className="image__project-slider-item">
            <img src={img3} alt="Lies From Granny" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
