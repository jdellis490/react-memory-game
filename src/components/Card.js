import React from 'react'

const Card = ({item, id, handleClick}) => {
  const itemClass = item.stat ? ' active ' + item.stat : '';

  return (
    <div className={'card' + itemClass}onClick={() => handleClick(id)}>
        <img src={item.img} alt={item.id} />

    </div>
  )
}

export default Card