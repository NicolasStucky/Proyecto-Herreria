import React, { useState } from 'react'
import "./contacto.css"
import { TextField} from '@mui/material'




function Contacto() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
 
 
 
 
 
    return (
    <div className='container'>
        <h1 className='contacto-title'>Contáctenos</h1>
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
            
            

            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="form-inputs">
                    <TextField 
                    id="outlined-basic" 
                    className='input' 
                    label="Su nombre" 
                    variant="outlined" 
                    margin='normal'
                    error="true"
                    helperText=""
                    value={nombre}
                    onChange={(e) => {
                        setNombre(e.target.value)
                        if(nombre.length < 2){
                            
                        }
                    }}
                    />
                    <TextField 
                    id="outlined-basic" 
                    className='input' 
                    label="Su apellido" 
                    variant="outlined" 
                    error=""
                    helperText=""
                    margin='normal'
                    value={apellido}
                    onChange={(e) => {
                        setApellido(e.target.value)
                    }}
                    />


                    <TextField 
                    margin='normal'
                    name="" 
                    variant="outlined"  
                    className='textarea' 
                    maxRows={25}
                    minRows={5}
                    multiline
                    label="Su mensaje"

                    />

                </div>

                <button type='submit' className='btn-form'>Enviar</button>
            </form>
        </div>
    
        
    </div>
  )
}

export default Contacto