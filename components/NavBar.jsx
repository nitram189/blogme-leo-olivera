'use client';

import Link from "next/link";
import { useState } from "react";


export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen)
  }
  const toggleLinks = () => {
    if (isOpen) {
      toggleButton()
    }
  }

  return (
    <header className="absolute left-0 top-0 w-full z-10 flex justify-between items-center p-5 lg:px-10">

      <Link
        href='/'
        className="text-3xl font-bold text-black/80">
          blogme.
      </Link>

      <button
        type="button"
        onClick={toggleButton}
        className={`${isOpen ? 'hidden' : 'block md:hidden'} text-black/70`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
      </button>

      <nav className={`absolute ${isOpen
        ? 'opacity-100 visible top-0 right-0 bottom-0 bg-white/40 backdrop-blur-lg w-3/4 sidebar h-screen ease-in-out duration-200'
        : 'opacity-0 invisible md:opacity-100 md:visible md:relative'}`}>

        <button
          type="button"
          onClick={toggleButton}
          className={`absolute ${isOpen ? 'block' : 'hidden'} text-black/80 top-6 right-5`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className={`flex items-center text-black/80 ${isOpen ? 'flex-col mt-20 space-y-5' : 'flex-row'} relative`}>

          <li>
            <Link
              href='/argentina'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Argentina
            </Link>
          </li>

          <li>
            <Link
              href='/sudamerica'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Sudamerica
            </Link>
          </li>

          <li>
            <Link
              href='/centroamerica'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Centroamerica
            </Link>
          </li>

          {/* <li>
            <Link
              href='/fotos'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200">
                Fotos
            </Link>
          </li> */}

          <li>
            <Link
              href='/libros'
              onClick={toggleLinks}
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Libros
            </Link>
          </li>

          <li>
            <Link
              href='/contacto'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Contacto
            </Link>
          </li>

          <li>
            <Link
              href='/carrito'
              onClick={toggleLinks}
              className="font-semibold hover:text-black ease-in duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
