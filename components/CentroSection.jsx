import Image from "next/image";
import { Slider } from ".";


export default function CentroSection({ viaje }) {

    const { fecha, descripcion, imagesData } = viaje;

    const parrafos = descripcion.split('\n');

    return (
      <div className="py-5 lg:py-10 border-t border-gray-400">
  
        <div>
          <h5 className="font-bold">{ fecha }</h5>
  
          { parrafos.map(( parrafo, index) => (
            <p key={ index } className="py-2 font-medium text-lg text-gray-800 text-justify">{ parrafo }</p>    
          ))}
        </div>
  
        <Slider slides={ imagesData }/>
      </div>
    )
  }
  