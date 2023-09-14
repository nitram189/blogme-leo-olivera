import { getBLogIntro } from "@/services";


export default async function BlogIntro({ idNumber }) {

  const intro = await getBLogIntro();

  const mappedIntro = intro.filter(( array ) => array.id === idNumber );

  const parrafos = mappedIntro[0].descripcion.split('\n');

  return (
    <>
    { mappedIntro?.map(( texto ) => (
        
        <section
          key={ texto.id }
          className="px-5 md:px-10 py-10 md:py-16 bg-gray-200">

          <div className="flex flex-col lg:w-3/4 mx-auto">

            <h5 className="uppercase text-sm font-medium">{ texto.fecha }</h5>

            <h3 className="text-5xl lg:text-6xl font-bold py-3">{ texto.titulo }</h3>

            { parrafos?.map(( parrafo, index ) => (
              <p key={ index } className="text-lg font-medium text-justify py-2">{ parrafo }</p>
            ))}
          </div>
        </section>
      ))}
    </>
    
  )
}
