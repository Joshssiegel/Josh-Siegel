import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (

      <footer className="main-footer" id="footer">
        <div className="container">
              <font size="3" style={{color: 'white'}}> Want to talk? Email me at Joshssiegel@gmail.com or just click the mail button below! <br/></font>
              <a href="https://www.facebook.com/josh.siegel.731"><i class="fa fa-facebook-square social" style={{color: "blue", paddingRight: "10px"}}></i></a>&nbsp;&nbsp;
              <a href="https://github.com/Joshssiegel"><i class="fa fa-github social" style={{ color: "green", paddingRight: "10px"}}></i></a>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/joshua-siegel-35b946129/"><i class="fa fa-linkedin-square social" style={{ color: "#0000CD", paddingRight: "10px"}}></i></a>&nbsp;&nbsp;
              <a href="mailto:joshssiegel@gmail.com"><i class="fa fa-envelope-o social" style={{ color: "red", paddingRight: "0px"}}></i></a>&nbsp;&nbsp;

        </div>
      </footer>
    )
    //
    //     return (
    //     <footer className="main-footer">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6 text-center text-lg-left">
    //         <p className="social">
    //           <a href="#" className="external facebook wow fadeInUp">
    //             <i className="fa fa-facebook" />
    //           </a>
    //           <a
    //             href="#"
    //             data-wow-delay="0.2s"
    //             className="external instagram wow fadeInUp"
    //           >
    //             <i className="fa fa-instagram" />
    //           </a>
    //           <a
    //             href="#"
    //             data-wow-delay="0.4s"
    //             className="external gplus wow fadeInUp"
    //           >
    //             <i className="fa fa-google-plus" />
    //           </a>
    //           <a href="#" data-wow-delay="0.6s" className="email wow fadeInUp">
    //             <i className="fa fa-envelope" />
    //           </a>
    //         </p>
    //       </div>
    //
    //     </div>
    //   </div>
    // </footer>
    // )
  }
}
