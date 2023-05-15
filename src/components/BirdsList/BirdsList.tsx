import React from 'react'
import Card from '../Card';
import img from '../../assets/123.jpg'


const BirdsList = () => {
    let list = [
    {
      // img: '../../assets/123.jpg',
      title: 'Seagull'
    }, 
    {
      img: '../../assets/123.jpg',
      title: 'Another Seagull'
    },
    {
      img: '../../assets/123.jpg',
      title: 'Third Seagull'
    }];


  return (
    <>
      {list.map((item) => <Card img={item.img} title={item.title}/>)}
    </>
  )
}

export default BirdsList
