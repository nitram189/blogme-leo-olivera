import { Slider } from ".";


export default function ArgSection({ viaje }) {

  const { id, dia, descripcion, mappedImg } = viaje;

  const parrafos = descripcion.split('\n');

  return (
    <div className="py-5 lg:py-10 gap-5 lg:gap-10 border-t border-gray-400">

      <div>
        <h5 className="text-xl font-medium">{ dia }</h5>

        { parrafos.map(( parrafo, index) => (
          <p key={ index } className="py-2 font-medium text-lg text-gray-800 text-justify">{ parrafo }</p>    
        ))}
      </div>

      <Slider slides={ mappedImg }/>

    </div>
  )
}
