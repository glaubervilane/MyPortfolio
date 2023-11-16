// Experience.js
import { useEffect } from 'react';
import '../App.css';
import experiences from './experienceData';

function Experience() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item, .timeline-item-reverse');

    const handleScroll = () => {
      timelineItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;

        // If the timeline item is in the viewport
        if (itemTop < window.innerHeight && itemBottom >= 0) {
          item.classList.add('animate');
        } else {
          item.classList.remove('animate');
        }
      });
    };

    // Initial check on mount
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="experience-wrapper" id='experience-wrapper'>
      <section className="py-3 py-md-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">Work Experience</h2>

          <div className="row">
            <div className="col-md-12">
              <div className="timeline">
                {experiences.map((experience, index) => (
                  <div key={index} className={index % 2 === 0 ? 'timeline-item' : 'timeline-item-reverse'}>
                    <div className="timeline-badge"></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">{experience.title}</h4>
                        <p className="text-muted">{experience.date}</p>
                      </div>
                      <div className="timeline-body">
                        <p>{experience.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="timeline-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;