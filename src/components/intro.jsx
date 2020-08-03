import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
    <section
  id="intro"
  style={{
    background: "url(img/maine_crop.jpg) center center no-repeat",
    backgroundSize: "cover",
  }}
  className="intro-section pb-2"
>
  <div className="container text-center">
    <h1 data-animate="fadeInDown" className="text-shadow mb-5" style={{fontSize: "7vw", textAlign: "center", fontFamily: "Courier New", display: "inline", whiteSpace: "nowrap"}} >
      Josh Siegel
    </h1>

    <hr style={{height: '.3vh', width: '50vw', border: 'none', backgroundColor: 'rgb(255,255,255)'}} />

    <h1 data-animate="fadeInUp" className="text-shadow text-400" style={{ fontSize: "4vw", textAlign: "center", fontFamily: "Courier New"}}>
      Software Engineer
    </h1>
    <h1 data-animate="fadeInUp" className="text-shadow text-400" style={{ fontSize: "4vw", textAlign: "center", fontFamily: "Courier New"}}>
      Adventurer
    </h1>
    <h1 data-animate="fadeInUp" className="text-shadow text-400" style={{ fontSize: "4vw", textAlign: "center", fontFamily: "Courier New"}}>
      Fitness Enthusiast
    </h1>

  </div>
</section>

    )
  }
}
