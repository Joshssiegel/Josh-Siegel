import React, { Component } from 'react';

class LeftArrow extends Component {
  render() {
    if(!this.props.disabled){
      return(
        <div className='backArrow' onClick={this.props.onClick}>
          <i className='fa fa-angle-left fa-5x' aria-hidden='true'></i>
        </div>
      )
    }
    else{
      return(
        <div className='backArrow' onClick={this.props.onClick}>
          <i className='fa fa-angle-left fa-5x' aria-hidden='true'></i>
        </div>
      )
    }
  }
}

export default LeftArrow;
