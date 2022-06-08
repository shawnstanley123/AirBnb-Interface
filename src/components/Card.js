import React from 'react'
import "./Card.css"
export default function Card({coverImg,rating,reviewCount,location,title,price,openSpots}){
  let badgeText
  if(openSpots ===0)
  badgeText="SOLD OUT"
  else if(location === "Online")
  badgeText="ONLINE"
  return (
   

    <div className="card">
      <div className="sold--badge">{badgeText}</div>
      <img src={coverImg} className="card--image"alt=""/>
      <div className="card--status">
          <img src="/images/star.png" className="card--star"alt=""/>
      <span>{rating}</span>
      <span>({reviewCount}) • </span>
      <span>{location}</span>
     
    <p>{title}</p>
    <p>From ${price} / person</p>
    </div>
    </div>
  )
}
