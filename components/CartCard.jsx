import { useLibro } from "@/hooks/useLibro";
import Image from "next/image";


export default function CartCard({ libro }) {

  const { actualizarCantidad, eliminarLibro } = useLibro();
  
  return (

    <div className="border-2 bg-white/40 rounded-lg p-5 mb-5 flex">

     <div className="w-1/4">
       <Image
         src={ libro.imagen }
         alt={`Imagen relacionada al libro ${ libro.titulo }`}
         width={80}
         height={80}/>
     </div>

      <div className="w-3/4 flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">{ libro.titulo }</h3>
        <p className="text-xl font-semibold text-red-900">ARS { libro.precio }</p>
        
        <div className="flex gap-5">
          <p className="text-lg font-medium">Cantidad:</p>

          <select
            value={ libro.cantidad }
            onChange={(e) => actualizarCantidad({
                id: libro.id,
                cantidad: +e.target.value
              })}
            className="lg:w-1/3 sm:w-1/2 w-full cursor-pointer text-center rounded-md bg-black/10 text-lg font-medium">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
          </select>
        </div>
        
        <p className="text-lg font-semibold">Subtotal: ARS { libro.cantidad * libro.precio }</p>
      </div>

      <div>
        <button
          type="button"
          onClick={() => eliminarLibro( libro.id )}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
         </svg>
        </button>
      </div>
    </div>
  )
}
