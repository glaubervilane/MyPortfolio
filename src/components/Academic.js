// Academic.js
import React from 'react';
import '../App.css';
import academicData from './academicData';

function Academic() {

  return (
    <section className="academic-wrapper py-5" id='academic-wrapper'>
      <div className="container">
        <h2 className="display-4 fw-bold text-center mb-5">Academic Background</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            {academicData.map((entry, index) => (
              <div key={index} className="academic-entry mb-4">
                <h4 className="course-title">{entry.course}</h4>
                <p className="institution">{entry.institution}</p>
                <p className="year">{entry.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academic;
