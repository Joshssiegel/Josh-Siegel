import React, { Component } from 'react';

class RightArrow extends Component {
  render() {
    if(!this.props.disabled){
      return(
        <div className='frontArrow' onClick={this.props.onClick}>
          <i className='fa fa-angle-right fa-5x' aria-hidden='true'></i>
        </div>
      )
    }
    else{
      return(
        <div className='frontArrow' onClick={this.props.onClick}>
        <i className='fa fa-angle-right fa-5x' aria-hidden='true'></i>
      </div>
    )
    }
  }
}

export default RightArrow;
