import React from 'react'
import './Home.scss'
import HomeImg from '../../../public/HomePage.svg'

export default function Home() {
  return (
    <div>
      <div className="home">
       <div className="container">
        <div className="hero-list">
          <h3>Школа <b>' { <span>программирования</span> }  '</b> для тех, кому нужны реальные навыки,
              а не просто сертификат
         </h3>
         <p>Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</p>
         <button className='home-button'>
         Пройти тестирование
         <i class='bx bxs-right-arrow-alt'></i>
         </button>
        </div>
        <div className="hero-img">
          <div className="border-radius-1">
          <div className="border-radius-2">
          <div className="border-radius-3">
          <div className="border-radius-4">
             <img className='homeImg' src={HomeImg} alt="" />
          </div>
          </div>
          </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}
