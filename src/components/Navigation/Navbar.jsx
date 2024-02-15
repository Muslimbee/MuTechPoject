import React from 'react'
import './Navbar.scss'
import Logo from '../../../public/Logo/LogoMu.jpg'

export default function Navbar() {
  return (
    <div>
       <div className="nav">
        <div className="navbar">
            <div className="navbar-logo">
            <img src={Logo} alt="" />
            </div>
            <div className="navbar-center-item">
                <a href="#">Чему вы научитесь</a>
                <a href="#">Процесс обучения</a>
                <a href="#">Стоимость</a>
                <a href="#">Контакты</a>
            </div>
            <div className="navbar-register-item">
                <div className="buttons">
                    <button className='signin-button'>
                        Регистрация
                    </button>
                    
                    <button className='login-button'>
                    {/* <i class='bx bx-right-arrow-alt'></i> */}
                    Войти 
                    </button>
                </div>
            </div>
        </div>
        .
        </div> 
    </div>
    
  )
}
