import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <header className="header">
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <a href="#intro" className="navbar-brand scrollTo">
        Josh Siegel
      </a>
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarcollapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler navbar-toggler-right"
      >
        <span className="fa fa-bars" />
      </button>
      <div id="navbarcollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#intro" className="nav-link link-scroll">
              Intro
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link link-scroll">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#experiences" className="nav-link link-scroll">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link link-scroll">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#adventures" className="nav-link link-scroll">
              Adventures
            </a>
          </li>
          <li className="nav-item">
            <a href="#footer" className="nav-link link-scroll">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    )
  }
}
