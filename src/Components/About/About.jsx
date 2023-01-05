import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import brand from "../../Assets/style3.png"
import Owner from "../../Assets/style7.jpeg"
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <Nav />
        <div className="Brand">
          <img src={brand} alt="" />
          <div className='Profile'>
            <h1>Our Brand...</h1>
            <p><b>StyleRapy</b> is a brand designed by women to celebrate women.
              A brand that believes fashion is all about being yourself
              and clothing is a self-expression that comes from within.
              We don't believe that fashion stops at size 12. Our brand is committed
              to creating beautiful designs for women of all sizes, race, sexual
              orientation and gender orientation. We believe every woman deserves
              to feel good and express beauty in her own way. <br/>
              Over <strong> 12,345 </strong> Satisfied customers worldwide and growing.</p>
          </div>
        </div>
        <div className="Owner">
          <div className="Profile">
            <h1>Our CEO...</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam delectus fugit totam vero accusamus pariatur itaque,
              laboriosam facere accusantium nemo aperiam tempora iure minima
              sit quod facilis voluptas tempore porro rem id, officiis cupiditate
              vel iste ipsa! Nam, officiis excepturi! Enim facere maxime ipsa
              voluptatem, obcaecati iure voluptates quidem? Blanditiis.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem 
              quisquam natus quas mollitia unde, a magni facilis similique.
            </p>
          </div>
          <img src={Owner} alt="" />
        </div>
        <Footer />
      
    </div>
  )
}

export default About
