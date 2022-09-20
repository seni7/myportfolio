import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <Link to={'/'}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_7NKziT1ycbR3l3yRBO1N7oW9O87b6b8N8WGDlneUUA1aTrLtaAkhfMv2jMcRveJXhA&usqp=CAU'
            alt="" className="header__logo"
            />
        </Link>
       <div className='header__nav'>
       <Link to={"/about"} className='header__clearLink'>
                <div className="header__option">
                    <span className="header__optionLineOne">About</span>
                </div>
                </Link>
               <Link to={'/skill'} className='header__clearLink'>
                    <div className="header__option">
                            <span className="header__optionLineOne">Skill</span>
                    </div>
               </Link>
                <Link to="/info" className='header__clearLink'>
                <div className="header__option">
                            <span className="header__optionLineOne">Projects</span>
                    </div>
                </Link>
       </div>
     
    </div>
  )
}

export default Header