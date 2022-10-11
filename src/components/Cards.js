import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, img: '', stat: ''},
        { id: 1, img: '', stat: ''},
        { id: 2, img: '', stat: ''},
        { id: 2, img: '', stat: ''},
        { id: 3, img: '', stat: ''},
        { id: 3, img: '', stat: ''},
        { id: 4, img: '', stat: ''},
        { id: 4, img: '', stat: ''},
        { id: 5, img: '', stat: ''},
        { id: 5, img: '', stat: ''},
        { id: 6, img: '', stat: ''},
        { id: 6, img: '', stat: ''},
        { id: 7, img: '', stat: ''},
        { id: 7, img: '', stat: ''},
        { id: 8, img: '', stat: ''},
        { id: 8, img: '', stat: ''},
    ])
  return (
    <div className="container">
        { items.map((item, index) => (
            <Card key={index} item={item}/>
        ))}
    </div>
  )
}

export default Cards