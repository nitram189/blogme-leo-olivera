import { getDataCentro } from "@/services";
import { CentroSection } from "."


export default async function BlogRecorridoCen() {

  const dataCentro = await getDataCentro();

  return (
    <section className="py-10 md:py-15 px-5 md:px-10 bg-gray-300 w-full">

      <div className="flex flex-col lg:w-3/4 mx-auto">

        <h5 className="uppercase text-sm font-medium">Chascomús, Buenos Aires, Argentina. 2017</h5>

        <h4 className="text-5xl lg:text-6xl font-bold py-3">El recorrido</h4>

        { dataCentro?.map(( viaje ) => (
            <CentroSection
              key={ viaje.id }
              viaje={ viaje }/>
        ))}
        
      </div>
    </section>
  )
}
