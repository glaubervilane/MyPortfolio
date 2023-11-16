// Projects.js
import React from 'react';
import '../App.css';
import projects from './projectData';

function Projects() {
  return (
    <div className="projects-wrapper" id='projects-wrapper'>
      <section className="py-3 py-md-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">My Projects</h2>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((project, index) => (
              <div key={index} className="col">
                <div className="card h-100">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                  <div className="card-footer pb-3 pt-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-main-offer">
                      GitHub
                    </a>
                    {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      Demo
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
