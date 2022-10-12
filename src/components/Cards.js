import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, img: '/images/Aang.webp', stat: ''},
        { id: 1, img: '/images/Aang.webp', stat: ''},
        { id: 2, img: '/images/Avatar_Kyoshi.webp', stat: ''},
        { id: 2, img: '/images/Avatar_Kyoshi.webp', stat: ''},
        { id: 3, img: '/images/Azula.webp', stat: ''},
        { id: 3, img: '/images/Azula.webp', stat: ''},
        { id: 4, img: '/images/Iroh.webp', stat: ''},
        { id: 4, img: '/images/Iroh.webp', stat: ''},
        { id: 5, img: '/images/Katara.webp', stat: ''},
        { id: 5, img: '/images/Katara.webp', stat: ''},
        { id: 6, img: '/images/Sokka.webp', stat: ''},
        { id: 6, img: '/images/Sokka.webp', stat: ''},
        { id: 7, img: '/images/Toph_Beifong.webp', stat: ''},
        { id: 7, img: '/images/Toph_Beifong.webp', stat: ''},
        { id: 8, img: '/images/Zuko.webp', stat: ''},
        { id: 8, img: '/images/Zuko.webp', stat: ''},
    ].sort(() => Math.random() - 0.5))

    function handleClick(id){
      items[id].stat = 'active'
      setItems([...items])
    }

    
  return (
    <div className="container">
        { items.map((item, index) => (
            <Card key={index} item={item} id={index} handleClick={handleClick}/>
        ))}
    </div>
  )
}

export default Cards