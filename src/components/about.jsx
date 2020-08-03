import React, { Component } from 'react'

export default class About extends Component {
      render() {
        return (
<section id="about" className="about-section">
  <div className="container">
    <header className="text-center">
      <h2 data-animate="fadeInDown" className="title">
        About me
      </h2>
    </header>
    <div data-animate="fadeInDown" className="col-sm-6 mx-auto">
      <img
        src="img/josh-circle.png"
        className="image rounded-circle img-fluid"
      />
    </div>
    <br/>
    <div data-animate="fadeInUp" className="text-center">
      <p>
        Hello! My name is Josh and welcome to my website. I am a software engineer who enjoys working on projects that have impactful applications.  I graduated from Rutgers University in May 2020 with a degree in Electrical / Computer Engineering and a double major in Computer Science, and I am now a software engineer at Bloomberg in NYC.
      </p>
      <p>
        Outside of work, I love going on adventures to explore new places and experience new things. From hiking up the tallest mountains, to scuba diving the depths of the oceans, I want to experience it all. You can see some of the adventures I have gone on below in the Adventure gallery!
      </p>
      <p>
        I am also a fitness enthusiast. I swam competitively for 8 years and ended up the president of the Rutgers Swim Club. I enjoy playing most sports and exercising with friends and family. 
      </p>
    </div>


  </div>
</section>
    )
    }
}
