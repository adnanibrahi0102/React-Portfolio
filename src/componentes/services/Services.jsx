import React from 'react'
import './Services.css'
import '../../index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const Experience = () => {
  return (
    
    <section id="services">
    <h3>What Skills I Have</h3>
    <h2>My Skills</h2>
    <div className="container experience-container">
      <div className="exp-frontend">
        <h2>Frontend Development</h2>
        <div className="exp-content">
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>React js</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="exp-backend">
      <h2>Backend Development</h2>
        <div className="exp-content">
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
           <div>
           <h4>Node js</h4>
            <small className="text-light">Intermediate</small>
           </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
           <div>
           <h4>Java</h4>
            <small className="text-light">Intermediate</small>
           </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>Mongo DB</h4>
            <small className="text-light">Beginner</small>
            </div>
          </article>
          <article className="exp-details">
            <AiFillCheckCircle className="exp-details-icon"/>
            <div>
            <h4>Express js</h4>
            <small className="text-light">Beginner</small>
            </div>
          </article>
        </div>

      </div>
    </div>
    

   </section>
    
  )
}

export default Experience
