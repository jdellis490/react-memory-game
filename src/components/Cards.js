import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Cards = () => {
  const [items, setItems] = useState([
    { id: 1, img: '/images/Aang.webp', stat: '' },
    { id: 1, img: '/images/Aang.webp', stat: '' },
    { id: 2, img: '/images/Avatar_Kyoshi.webp', stat: '' },
    { id: 2, img: '/images/Avatar_Kyoshi.webp', stat: '' },
    { id: 3, img: '/images/Azula.webp', stat: '' },
    { id: 3, img: '/images/Azula.webp', stat: '' },
    { id: 4, img: '/images/Iroh.webp', stat: '' },
    { id: 4, img: '/images/Iroh.webp', stat: '' },
    { id: 5, img: '/images/Katara.webp', stat: '' },
    { id: 5, img: '/images/Katara.webp', stat: '' },
    { id: 6, img: '/images/Sokka.webp', stat: '' },
    { id: 6, img: '/images/Sokka.webp', stat: '' },
    { id: 7, img: '/images/Toph_Beifong.webp', stat: '' },
    { id: 7, img: '/images/Toph_Beifong.webp', stat: '' },
    { id: 8, img: '/images/Zuko.webp', stat: '' },
    { id: 8, img: '/images/Zuko.webp', stat: '' },
  ].sort(() => Math.random() - 0.5))

  const [previous, setPrevious] = useState(-1)

  function checkCard(card) {
    if (items[card].id == items[previous].id) {
      items[card].stat = 'correct'
      items[previous].stat = 'correct'
      setItems([...items])
      setPrevious(-1)
    } else {
        items[card].stat = 'wrong'
        items[previous].stat = 'wrong'
        setItems([...items])
        setTimeout(() => {
          items[card].stat = ''
          items[previous].stat = ''
          setItems([...items])
          setPrevious(-1)
        }, 1000)
      }
  }

  function handleClick(id) {
    if (previous === -1) {
      items[id].stat = 'active'
      setItems([...items])
      setPrevious(id)
    } else {
        checkCard(id)
    }
  }


  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  )
}

export default Cards