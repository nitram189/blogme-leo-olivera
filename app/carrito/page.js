'use client';

import { CartCard, Footer } from "@/components";
import { useLibro } from "@/hooks/useLibro";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {

    const { carrito } = useLibro();
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
      const totalAPagar = carrito.reduce((total, libro) => total + ( libro.cantidad * libro.precio ), 0 )
      
      setTotal( totalAPagar )

    }, [ carrito ])

  return (
    <>
      <main className="bg-[url('/cover-fotos/carrito-cover.jpeg')] bg-cover bg-top">

        <section className="xl:w-3/4 mx-auto flex flex-col justify-between items-start sm:flex-row gap-10 px-5 py-40">

          <div className="sm:w-2/3 w-full">

            <h2 className="text-5xl lg:text-6xl font-bold text-black/90">Tu carrito</h2>
            <p className="text-justify py-3 text-lg font-medium">Chequeá que todo esté en orden y si necesitas editar la cantidad o eliminar un producto, podes hacerlo desde acá mismo.</p>
            
            { carrito?.length === 0
              ? <div className="flex flex-col items-center gap-5 py-14">

                  <p className="text-lg font-semibold pb-3">Tu carrito está vacio. Ya viste mis libros?</p>

                  <Link
                    href='/libros'
                    className="hero-button w-1/2">
                      Ir a mis libros 
                  </Link>
                  
                  <Link
                    href='/'
                    className="cart-button w-1/2">
                      Ir al home
                  </Link>
                </div>
              : (
                carrito.map(( libro ) => (
                  <CartCard
                    key={ libro.id }
                    libro={ libro }/>
                ))
              ) }
          </div>

          <div className="sm:w-1/3 w-full bg-gray-100/50 p-5 rounded-lg flex flex-col gap-5 text-black/90">
            <h4 className="text-3xl font-semibold">Resumen</h4>
            
            <h5 className="text-xl font-semibold">Total: ARS <span className="text-red-900">{ total }</span></h5>
            
            <button
              type="button"
              className="hero-button">
                Checkout
            </button>
          </div>

        </section>

        <Footer />
      </main>

      
    </>

  )
}
