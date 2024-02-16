import React from 'react'
import './Section.scss'
import code from '../../../public/code.svg'
import Современные from '../../../public/Современные.svg'
import Простое from '../../../public/Простое.svg'
import Гибкий from '../../../public/Гибкий.svg'
import Прямая from '../../../public/Прямая.svg'
import Оплата from '../../../public/Оплата.svg'
import Быстрый from '../../../public/Быстрый.svg'

export default function SectionTwo() {
  return (
    <div>
      <div className="sectionTwo">
        <h1>Обучение в YtYt – это удобно и результативно</h1>
        <div className="container">
          <div className="card">
            <img src={code} alt="" />
            <h3>Огромное количество практики</h3>
            <p>Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
          </div>
          <div className="card">
          <img src={Современные} alt="" />
            <h3>Современные методики обучения</h3>
            <p>Спиральное обучение: 
              погружаемся в материал постепенно, виток за витком</p>
          </div>
          <div className="card">
          <img src={Простое} alt="" />
            <h3>Простое и понятное изложение</h3>
            <p>Вместо заумных терминов – примеры из реального мира</p>
          </div>
          <div className="card">
          <img src={Гибкий} alt="" />
            <h3>Гибкий график занятий</h3>
            <p>Учитесь в любое время в удобном 
              для вас темпе</p>
          </div>
          <div className="card">
          <img src={Прямая} alt="" />
            <h3>Прямая связь с опытными программистами</h3>
            <p>Задавайте вопросы 
                и отправляйте свой код на проверку</p>
          </div>
          <div className="card">
          <img src={Оплата} alt="" />
            <h3>Оплата небольшими частями</h3>
            <p>Платите только за тот материал, который сейчас изучаете, 
              a не за весь курс сразу</p>
          </div>
          <div className="card">
          <img src={Быстрый} alt="" />
            <h3>Быстрый и легкий возврат</h3>
            <p>Если передумаете учиться –
                вернем деньги за 3 рабочих дня</p>
          </div>
        </div>
      </div>
    </div>
  )
}
