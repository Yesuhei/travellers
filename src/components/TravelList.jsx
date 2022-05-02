import React from 'react'

const TravelList = ({res}) => {
  return (
    <div >{ res && res.map(dt => <div className=''>
        <img src={dt.image} alt="" />
        <p>{dt.description}</p>
    </div> ) }</div>
  )
}

export default TravelList