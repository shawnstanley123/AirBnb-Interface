import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cardlist=data.map((card)=>{
    return <Card coverImg={card.coverImg} id={card.id}  title={card.title} price={card.price} location={card.location} rating={card.stats.rating} reviewCount={card.stats.reviewCount} openSpots={card.openSpots} />
  })
  return (
    <div>

      <Navbar 
      
      />
      <Hero/>
      <div className="card-list">
      {cardlist} 
     </div>
    </div>
  );
}

export default App;
