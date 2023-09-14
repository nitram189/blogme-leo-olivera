"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLibro } from "@/hooks/useLibro";


export default function BookModal({ libroSel }) {

  const [ cantidad, setCantidad ] = useState(0);

  const { handleModal, agregarAlCarrito } = useLibro();

  const handleSubmit = (e) => {
    e.preventDefault();
    if( cantidad === 0 ) {
      alert('Por favor selecciona una cantidad valida')
      return
    }
    const libroEnCarrito = {
      ...libroSel,
      cantidad
    }
    agregarAlCarrito( libroEnCarrito )
  }
    
  return (
    <div className="flex flex-col justify-center items-center relative">

      <button
        type="button"
        onClick={ handleModal }
        className="absolute right-0 top-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      </button>

      <div>
        <Image
          src={ libroSel.imagen }
          alt={`Imagen portada libro ${ libroSel.titulo }`}
          width={500}
          height={500}/>
      </div>

      <div className="flex flex-col gap-5">
        <h5 className="text-4xl lg:text-5xl font-bold">{ libroSel.titulo }</h5>

        <h6 className="text-2xl font-semibold">Formato papel + e-book bonificado: <span className="text-red-700 font-bold">ARS { libroSel.precio }.-</span></h6>

        <p className="text-lg text-justify">Aprovecha la promo hasta el mes de diciembre en la que comprando con cualquier medio de pago* obtenes de regalo el e-book 100% bonificado, solo vas a pagar por la version del libro en papel, nada mas!</p>

        <form 
          onSubmit={ handleSubmit }
          className="flex flex-col gap-5">
            <select
              value={ libroSel.cantidad }
              onChange={(e) => setCantidad( e.target.value )}
              className="hero-button lg:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <option value="">Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          
            <button
              type="submit"
              className="text-center lg:w-1/3 sm:w-1/2 w-full py-1 rounded-xl font-semibold text-lg bg-indigo-700 text-white hover:bg-indigo-500"
              >
                Agregar al carrito
            </button>
        </form>

        <Link
          href='/carrito'
          className="text-center lg:w-1/3 sm:w-1/2 w-full py-1 rounded-xl font-semibold text-lg bg-red-800 text-white hover:bg-red-600"
          >
            Ver carrito
        </Link>

        <p className="pt-10 text-justify">* Si estas fuera de Argentina y queres alguno de mis libros, por favor comunicate a traves de mis redes sociales y te estare respondiendo a la brevedad para determinar el medio de envio y metodos de pago mas convenientes.</p>

        <div className="flex gap-3 border-2 w-fit py-1 px-5 rounded-lg hover:bg-gray-200">
          <Link
            href='/contacto'
            className='font-semibold'>
              Ir a contacto
          </Link>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </div>
        </div>
        
      </div>

    </div>
  )
}
