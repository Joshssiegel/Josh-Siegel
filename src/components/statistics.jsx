import React, { Component } from 'react'

export default class Statistics extends Component {
  render() {
    return (
    <section
  id="statistics"
  data-dir="up"
  style={{ background: 'url("img/parallax.jpg")' }}
  className="statistics-section text-white parallax parallax"
>
  <div className="container">
    <div className="row showcase text-center">
      <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
        <div className="item">
          <div className="icon">
            <i className="fa fa-align-justify" />
          </div>
          <h5 className="text-400 mt-4 text-uppercase">
            <span className="counter">120</span>
            <br />
            Websites
          </h5>
        </div>
      </div>
      <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
        <div className="item">
          <div className="icon">
            <i className="fa fa-users" />
          </div>
          <h5 className="text-400 mt-4 text-uppercase">
            <span className="counter">50</span>
            <br />
            Satisfied Clients
          </h5>
        </div>
      </div>
      <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
        <div className="item">
          <div className="icon">
            <i className="fa fa-copy" />
          </div>
          <h5 className="text-400 mt-4 text-uppercase">
            <span className="counter">320</span>
            <br />
            Projects
          </h5>
        </div>
      </div>
      <div data-animate="fadeInUp" className="col-lg-3 col-md-6">
        <div className="item">
          <div className="icon">
            <i className="fa fa-font" />
          </div>
          <h5 className="text-400 mt-4 text-uppercase">
            <span className="counter">333</span>
            <br />
            Magazines and Brochures
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div className="dark-mask" />
</section>
    )
    }
    }
