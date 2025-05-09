import React from 'react'

const HostelCard = ({image, name, location}) => {
  return (
    <div style={{width: "200px", margin: "20px"}}> 
        <img src={image} alt='' style={{width: "100%", height: "100px", objectFit: "cover"}}/>
        <h3 style={{fontWeight: "normal", fontSize: "20px", margin: 0}}>{name}</h3>
        <p style={{fontWeight: "normal", fontSize: "14px", margin: 0}}>{location}</p>
    </div>
  )
}

export default HostelCard