import React, { Component } from 'react'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import Carousel, { consts } from 'react-elastic-carousel';
import { Card } from '@material-ui/core';

export default class Adventure extends Component {
  state = {
    items: [
      {id: 1, title: 'Mount Bierstadt, Colorado', img: 'img/bierstadt_portrait.jpg',
    description: ""},
      {id: 2, title: 'Mount Evans, Colorado', img: 'img/evans.jpg',
    description: ""},
      {id: 3, title: 'Colorado Springs Glider Port', img: 'img/glider.jpg',
    description: ""},
      {id: 4, title: 'Acadia National Park, Maine', img: 'img/acadia-josh.jpg',
    description: ""},
      {id: 5, title: 'Schroon Lake, New York', img: 'img/schroon.jpg',
    description: ""},
    {id: 6, title: 'Royal Palace of Madrid, Spain', img: 'img/madrid.jpg',
  description: ""},
  {id: 7, title: 'La Sagrada Familia, Barcelona', img: 'img/barcelona.jpg',
description: ""},
    ]
  }


  myArrow({ type, onClick, isEdge }) {
        if(type === consts.PREV){
         return (
          <LeftArrow onClick={onClick} disabled={isEdge}>{}</LeftArrow>
        )}
        else{
          return (
          <RightArrow onClick={onClick} disabled={isEdge}>{}</RightArrow>
        )}
      }

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
      { width: 1400, itemsToShow: 5 },
      ];
    const { items } = this.state;
    return (
    <section id="adventures" style={{
      background: "url(img/colorado.jpg)",
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
    }}>

    <div className="mb-5 text-center">
      <h2 data-animate="fadeInUp" className="title">
        Adventures
      </h2>

      <h4 data-animate="fadeInUp" className="lead">
        Here are some of the places I have gone and activities I have done
      </h4>
    </div>

    <Carousel breakPoints={breakPoints} itemPadding={[10,5]} renderArrow={this.myArrow} pagination='' style={{height: 'auto', minHeight: '750px'}}>
      {items.map(item =>
        <div className = "tech-slide" key={item.id}>
          <Card className = "tech-card" data-animate="fadeInUp">
            <img src={item.img} alt={item.id} className = "slide-img" />
            <h4 >{item.title}</h4>
            <p> {item.description} </p>
          </Card>
        </div>
      )}
    </Carousel>





</section>
    )
    }
    }
