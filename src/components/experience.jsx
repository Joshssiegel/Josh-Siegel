import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
    <section id="experiences" className="experience-section services-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">
            Experience
          </h2>
        </header>

    </div>

    <div class="timeline" data-animate="fadeInUp">

      <div class="timeline-container timeline-right" data-animate="fadeInRight">
        <div class="timeline-content">
          <h2 style={{color: "black"}}>Bloomberg</h2>
          <h4 style={{color: "black"}}>Software Engineer</h4>
          <h6 style={{color: "black"}}>August 2020 - Present</h6>
          <p style={{color: "black"}}>More information to come!</p>
        </div>
      </div>

      <div class="timeline-container timeline-right" data-animate="fadeInRight">
        <div class="timeline-content">
          <h2 style={{color: "black"}}>Rutgers University</h2>
          <h4 style={{color: "black"}}>BS in Electrical / Computer Engineering</h4>
          <h6 style={{color: "black"}}>September 2016 - May 2020</h6>
          <p style={{color: "black"}}>Graduated suma cum laude with a 3.99 GPA from the Rutgers Engineering Honors Academy with a double major in Electrical/Computer Engineering and Computer Science</p>
        </div>
      </div>

      <div class="timeline-container timeline-right" data-animate="fadeInRight">
        <div class="timeline-content">
          <h2 style={{color: "black"}}>Bloomberg</h2>
          <h4 style={{color: "black"}}>Software Engineering Intern</h4>
          <h6 style={{color: "black"}}>May 2019 - August 2019 </h6>
          <p style={{color: "black"}}>Increased big data file storage efficiency by a factor of 100 by integrating Hadoop Ozone with Kubernetes</p>
        </div>
      </div>


      <div class="timeline-container timeline-right" data-animate="fadeInRight">
        <div class="timeline-content">
          <h2 style={{color: "black"}}>Lockheed Martin</h2>
          <h4 style={{color: "black"}}>Software Engineering Intern</h4>
          <h6 style={{color: "black"}}>May 2018 - August 2018</h6>
          <p style={{color: "black"}}>Developed Python scripts to test the flight software on NASA's Orion Human Space Capsule</p>
        </div>
      </div>

      <div class="timeline-container timeline-right" data-animate="fadeInRight">
        <div class="timeline-content">
          <h2 style={{color: "black"}}>Rutgers University</h2>
          <h4 style={{color: "black"}}>Research Assistant</h4>
          <h6 style={{color: "black"}}>September 2017 - January 2019</h6>
          <p style={{color: "black"}}>Designed a machine learning pipeline to classify types of motion based on someone's brain activity</p>
        </div>
      </div>

      <div class="timeline-container timeline-right" data-animate="fadeInRight">
        <div class="timeline-content">
          <h2 style={{color: "black"}}>Lockheed Martin</h2>
          <h4 style={{color: "black"}}>Electronics Engineering Intern</h4>
          <h6 style={{color: "black"}}>May 2017 - August 2017</h6>
          <p style={{color: "black"}}>Designed a software defined radar system by performing signal processing in Python and C++, and located points of failure on radar power supplies</p>
        </div>
      </div>


    </div>


</section>
    )
    }
}
