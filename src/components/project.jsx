import React, { Component } from 'react'


export default class Projects extends Component {

  render() {
    return (
    <section id="projects" style={{ background: 'url("img/wood.jpg") ' }}
      className="text-white ">

      <div className="container">
        <div className="col-sm-12">
          <header className="text-center">
            <h2 data-animate="fadeInDown" className="white-title">
              Projects
            </h2>
            <p data-animate="fadeInUp" className="white-lead"> Click on the pictures to learn more about each project!</p>
          </header>



          <div id="references-masonry" data-animate="fadeInUp">
            <div className="row">
              <div
                className="reference-item col-lg-4 col-md-6"
              >
                <div className="reference">
                  <a href="https://devpost.com/software/ru-recognized" target="_blank">
                    <img src="img/pam.jpg" alt className="img-fluid" />

                    <div className="overlay">
                      <div className="inner">
                        <h3 className="h4 reference-title">RU Recognized</h3>
                        <p>RU Recognized is a video recognition system that enables a
                          reverse video search to identify the source of the video.
                        </p>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
              <div data-category="seo" className="reference-item col-lg-4 col-md-6">
                <div className="reference">
                  <a href="https://devpost.com/software/crowdplay-q65era" target="_blank">
                    <img src="img/speakers_2.jpg" alt className="img-fluid" />
                    <div className="overlay">
                      <div className="inner">
                        <h3 className="h4 reference-title">CrowdPlay</h3>
                        <p>CrowdPlay is a system that allows a group of people to control a speaker and queue songs remotely using text messages.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                data-category="marketing"
                className="reference-item col-lg-4 col-md-6"
              >
                <div className="reference">
                  <a href="https://devpost.com/software/rucycle" target="_blank">
                    <img src="img/recycle_phone.png" alt className="img-fluid" />
                    <div className="overlay">
                      <div className="inner">
                        <h3 className="h4 reference-title">RUCycle</h3>
                        <p>RUcycle is an Android App that uses machine learning classifiers to determine if an item is recyclable, what material it's made of, and the closest recycling center.</p>
                      </div>
                    </div>
                  </a>

                </div>
              </div>

              <div
                data-category="webdesign"
                className="reference-item col-lg-4 col-md-6"
              >
                <div className="reference">
                  <a href="https://devpost.com/software/ru-you" target="_blank">
                    <img src="img/ru-you.jpg" alt className="img-fluid" />
                    <div className="overlay">
                      <div className="inner">
                        <h3 className="h4 reference-title">RU You?</h3>
                        <p>RU You is a security box which only opens for specific people. This was made on Halloween to prevent people from stealing candy by only dispensing one candy per person.</p>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
              <div
                data-category="other"
                className="reference-item col-lg-4 col-md-6"
              >
                <div className="reference">
                  <a href="https://devpost.com/software/rock-paper-myo-cbgo4n" target="_blank">
                    <img src="img/Rock_Paper_Myo.jpeg" alt className="img-fluid" />
                    <div className="overlay">
                      <div className="inner">
                        <h3 className="h4 reference-title">Rock Paper Myo</h3>
                        <p>Rock Paper Myo is a robot that is designed to always win at Rock Paper Scissors by reading your muscular signals from a myo armband which communicates to the microcontroller.</p>
                      </div>
                    </div>
                  </a>

                </div>

              </div>
              <div
                data-category="webdesign"
                className="reference-item col-lg-4 col-md-6"
              >
                <div className="reference">
                  <a href="https://devpost.com/software/ruscared" target="_blank">
                    <img src="img/spider.png" alt className="img-fluid" />
                    <div className="overlay">
                      <div className="inner">
                        <h3 className="h4 reference-title">RU Scared</h3>
                        <p>RU Scared is a virtual reality thriller game where the user must escape a maze before the giant spider catches them. This game tests your fears on a new level.</p>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>











</section>
    )
    }
}
