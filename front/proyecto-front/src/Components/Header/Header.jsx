import React from 'react';
import "./header.css"
<<<<<<< HEAD
import iconMenu from "../../assets/menu.png"
import iconClose from "../../assets/close.png";
import iconInfo from "../../assets/informacion.png";
import iconHerrero from "../../assets/herrero.png";
import iconContacto from "../../assets/contacto.png";
import iconDown from "../../assets/down.png";

=======
debugger
>>>>>>> d1fd541733f0d6b4fa0d785b50050a92936ecafc
function Header() {
  return (
    <nav className='nav'>
      
      <div className='nav__container'>

        <h1 className='nav__title'>DSHERRERIA</h1>

        {/* Iconos para abrir/cerrar menu */}
        <a href="#menu" className='nav__menu'>
          <img src={iconMenu} alt="Icono del menu" className='nav__icon'/>
        </a>

        <a href="#close" className='nav__menu nav__menu--second'>
          <img src={iconClose} alt="Icono para cerrar el menu" className='nav__icon'/>
        </a>

        {/* Menu */}
        <ul className='dropdown' id='menu'>

          {/* Sección: ¿Quiénes somos? */}
          <li className='dropdown__list'>
              <a href="#informacion" className='dropdown__link'>
                <img src={iconInfo} alt="Icono de información"/>
                <span className='dropdown__span'>¿Quiénes somos?</span>
              </a>
          </li>

          {/* Sección: Trabajos */}
          <li className='dropdown__list'>
            <a href="#informacion" className='dropdown__link'>
              <img src={iconHerrero} alt="Icono de información"/>
              <span className='dropdown__span'>Trabajos</span>
              <img src={iconDown} alt="Flecha" className='dropdown__arrow'/>

              <input type="checkbox" className='dropdown__check'/>
            </a>

            <div className='dropdown__content'>

              <ul className='dropdown__sub'>

                <li className='dropdown__li'>
                  <a href="#cocheras" className='dropdown__anchor'>Cocheras</a>
                </li>

                <li className='dropdown__li'>
                  <a href="#estructuras" className='dropdown__anchor'>Estructuras</a>
                </li>

                <li className='dropdown__li'>
                  <a href="#pinturas" className='dropdown__anchor'>Pinturas</a>
                </li>

                <li className='dropdown__li'>
                  <a href="#decks" className='dropdown__anchor'>Decks</a>
                </li>

                <li className='dropdown__li'>
                  <a href="#techos" className='dropdown__anchor'>Techos</a>
                </li>

              </ul>

            </div>
          </li>

          {/* Sección: Contacto */}
          <li className='dropdown__list'>
              <a href="#contacto" className='dropdown__link'>
                <img src={iconContacto} alt="Icono de contacto"/>
                <span className='dropdown__span'>Contacto</span>
              </a>
          </li>

        </ul>

      </div>
    
    </nav>
  );
}

export default Header;