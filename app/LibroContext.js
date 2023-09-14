'use client';

import { createContext, useEffect, useState } from "react"

export const LibroContext = createContext();

export const LibroProvider = ({ children }) => {

    const carritoLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('carrito')) || [];

    const [ modal, setModal ] = useState( false );
    const [ libroSel, setLibroSel ] = useState({});
    const [ carrito, setCarrito ] = useState( carritoLS );
    const [ isPageReady, setIsPageReady ] = useState( false );

    useEffect(() => {
      setIsPageReady( true )
    }, [])

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [ carrito ])

    const handleLibroSel = ( libro ) => {
        setLibroSel( libro )
    }

    const handleModal = () => {
        setModal( !modal )
    }

    const agregarAlCarrito = ( libro ) => {
      if( carrito.some(( libroState ) => libroState.id === libro.id )) {
        const carritoActualizado = carrito.map( libroState => libroState.id === libro.id ? libro : libroState )
        setCarrito( carritoActualizado )
      }
      else {
        setCarrito([ ...carrito, libro ])
     }
    } 

    const actualizarCantidad = ({ id, cantidad }) => {
      const carritoActualizado = carrito.map(( libroState ) => {
        if( libroState.id === id ) {
          libroState.cantidad = cantidad
        }
        return libroState
      })
      setCarrito( carritoActualizado )
    }

    const eliminarLibro = (id) => {
      const carritoActualizado = carrito.filter(( libroState ) => libroState.id !== id )
      setCarrito( carritoActualizado )
    }
      
    return (
        isPageReady
        ? <LibroContext.Provider
            value={{
            modal,
            handleModal,
            libroSel,
            handleLibroSel,
            agregarAlCarrito,
            carrito,
            actualizarCantidad,
            eliminarLibro
           }}>
            { children }
          </LibroContext.Provider>
        : null
    )
}