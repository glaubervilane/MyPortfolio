import React from 'react'
import '../App.css';
import MyPhoto from '../me-about.jpg'

function About() {
  return (
    <div className='about-wraper' id='about-wraper'>
      <section className="py-3 py-md-5">
        <div className="container mb-4 mb-md-5">
          <div className="row justify-content-md-center">
            <div className="col-md-6 offset-md-3">
              <img className='img-fluid rounded-circle shadow profile-picture' src={MyPhoto} alt="MyPhoto..." />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-2 gy-md-0 justify-content-xxl-center">
            <div className="col-12 order-md-1 col-md-8 col-xxl-6">
              <div className="text-center text-md-start">
                <h2 className="display-3 fw-bold lh-1">Glauber Marques</h2>
                <p className="text-secondary fs-4 mb-2">Full Stack Developer</p>
                <hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />
                <p>Full Stack Developer skilled in crafting scalable web apps and seamless user experiences. Proficient in JavaScript, Node.js, SQL, C#, .NET, Python, and Ruby on Rails.</p>
                <p>Notable Achievements:</p>
                <ul>
                  <li>Successfully transitioned to a software developer role through dedication and continuous learning.</li>
                  <li>Resolved countless complex technical issues and boosted efficiency by 100+ hours per week.</li>
                  <li>Designed visually appealing UIs that elevated user experience and garnered great feedback.</li>
                  <li>Currently expanding data-driven software development skills through advanced courses.</li>
                </ul>
                <p>Continuously exploring new technologies and honing my craft through hands-on projects. Passionate about developing innovative solutions and contributing to impactful applications.</p>
                <p>Eager to join a collaborative team and utilize my analytical mindset to solve problems. Let's connect to discuss how we can make an impact together!</p>
              </div>
            </div>
            <div className="col-12 order-md-0 col-md-4 col-xxl-4">
              <div className="text-center text-md-start me-md-3 me-xl-5">
                <p className="mb-4">
                  <span className="d-block display-6 lh-1">4+</span>
                  <span className="fs-4 text-secondary">years of experience</span>
                </p>
                <div className="d-grid">
                  <button className='btn-main-offer' type="button">Hire Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About