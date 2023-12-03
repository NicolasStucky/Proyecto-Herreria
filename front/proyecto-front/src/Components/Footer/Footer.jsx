import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='container'>
        <h1 className='footer-title'>Contáctenos</h1>
        <hr className='linea' />
        <p>¿Tiene alguna pregunta, necesita ayuda?¡Estamos a un solo mensaje de distancia!</p>

        <div className="container_datos">
            <div className="container_datos-info">
                <div className="caja-info">
                    <h4>Ubicación</h4>
                    <span>Lonoche 8383</span>
                </div>
                
                <div className="caja-info">
                    <h4>Correo Electrónico</h4>
                    <span>nicolastuky2005@gmail.com</span>
                </div>
                
                <div className="caja-info">
                    <h4>Llamar</h4>
                    <span>3512025476</span>
                </div>
            </div>
            

            <form action="">
                <div className="form-inputs">
                    <input type="text" required placeholder='Su nombre *' />
                    
                    <input type="email" required value={""} placeholder='Su correo electronico *' />

                    <textarea name="" id="" placeholder='Su mensaje *' cols="30" rows="10"></textarea>

                </div>

                <button type='submit' className='btn-form'>Enviar</button>
            </form>
        </div>
    
        
    </div>
  )
}

export default Footer