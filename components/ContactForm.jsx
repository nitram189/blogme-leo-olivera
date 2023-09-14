"use client";

import { useState } from "react";

export default function ContactForm() {

  const [ userData, setUserData ] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleData = (e) => {
    setUserData({
      ...userData,
      [ e.target.name ]: e.target.value
    })
  }
  
  const getData = (e) => {
    e.preventDefault();

    if( Object.values( userData ).includes('')) {
      alert('Todos los campos deben estar completos')
      return
    }
    alert('Gracias por escribirme. En breve respondere tu mensaje!');
    setUserData({
      nombre: '',
      correo: '',
      mensaje: ''
    })
  }



  return (
    <form
      onSubmit={ getData }>

      <div className="flex sm:flex-row flex-col sm:gap-10 gap-5">
      <input
          type="text"
          name="nombre"
          value={ userData.nombre }
          onChange={ handleData }
          placeholder="Nombre"
          className="py-2 px-3 rounded-md sm:w-1/2 w-full" />

        <input
          type="email"
          name="correo"
          value={ userData.correo }
          onChange={ handleData }
          placeholder="Email"
          className="py-2 px-3 rounded-md sm:w-1/2 w-full" />
      </div>

        <div className="flex flex-col w-full py-10">
          <textarea
            name="mensaje"
            value={ userData.mensaje }
            onChange={ handleData }
            placeholder="Mensaje"
            rows={7}
            cols={10}
            className="py-2 px-3 rounded-md" />
        </div>

        <button
          type="submit"
          className="border-2 rounded-md py-2 sm:w-1/4 w-1/2 text-white text-lg font-medium hover:bg-white/20">
            Enviar
        </button>
    </form>
  )
}
