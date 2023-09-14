'use client';

import { useLibro } from "@/hooks/useLibro";
import Image from "next/image"; 
import Modal from 'react-modal';
import { BookModal } from ".";

Modal.setAppElement('#libros')


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    maxHeight: '90vh',
    borderRadius: '1rem',
  },
};

export default function BookCard({ libro }) {

  const { modal, handleModal, libroSel, handleLibroSel } = useLibro();

  const parrafos = libro.descripcion.split('\n');

  return (
    <section className="bg-gradient-to-b from-black/10 to-black/20 px-5 py-10 sm:p-16">

      <div className="lg:w-3/4 mx-auto flex flex-col justify-between items-center lg:flex-row gap-10">

        <div className="lg:w-1/2 space-y-5">
          <h5 className="text-5xl lg:text-6xl font-bold">{ libro.titulo }</h5>

          { parrafos.map(( parrafo, index ) => (
            <p key={ index } className="text-justify text-xl text-black/80">{ parrafo }</p>
          ))}
        
          <button
            onClick={() => {
              handleModal()
              handleLibroSel( libro )
            }}
            className='hero-button'>
              Lo quiero
          </button>
        </div>

        <div className="lg:w-1/2">
          <Image
            src={ libro.imagen }
            alt={`Imagen del libro "${ libro.titulo }"`}
            width={600}
            height={600}/>
        </div>
      </div>


      <Modal
        isOpen={ modal }
        onRequestClose={ handleModal }
        style={ customStyles }
        >
          <BookModal
            libroSel={ libroSel } />
      </Modal>

  </section>
  )
}
