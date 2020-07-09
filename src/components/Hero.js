import React from 'react'
import HeroBcg from "../assets/HeroBcg.jpg"
// ===================================
const Hero = ({ children }) => {
  const HeroStyle = {
    height: "30rem",
    background: ` linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6)) ,url(${HeroBcg})center/cover no-repeat`,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
  return (
    <section style={HeroStyle} className="container p-5">
      {children}
    </section>
  )
}



export default Hero
