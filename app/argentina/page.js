import { BackToTopButton, BlogIntro, BlogRecorridoArg, Footer, ResumenArg } from "@/components";
import Image from "next/image";

export const metadata = {
  title: 'blogme. - Argentina',
  description: 'Mi primer aventura en bicicleta en la que cruce Argentina desde este a oeste. Historias, experiencias, tips de viaje y muchos momentos que quedaron guardados gracias a fotos y videos que fui tomando por el camino'
}

export default async function page() {

  return (
    <main className="bg-black">

      <section className="h-screen w-full bg-[url('/cover-fotos/arg-hero.jpeg')] bg-cover bg-top-right bg-fixed px-5">

        <div className="flex flex-col justify-center sm:items-center h-1/2">

          <h1 className="text-5xl lg:text-6xl font-bold py-5 text-black/80">Argentina, mi primer viaje</h1>

          <p className="text-xl font-medium text-black/80">Desde Chascomús a San Juan en bicicleta</p>
        </div>
      </section>

      <section className="text-white/90 px-5 md:px-10 py-16 lg:w-3/4 mx-auto bg-black">

      <div className="flex flex-col items-center justify-between">

        <div className="w-full">

          <h5 className="text-5xl font-semibold">Resumen del viaje</h5>

          <ResumenArg
            distancia='1500'
            dias='11'
            horas='93'  
            dinero='3200' />
        </div>

        <div className="w-full h-full lg:w-8/12 mx-auto flex justify-center">
          <Image
            src='/map-arg.jpeg'
            alt='Imagen resumen viaje Argentina'
            width={600}
            height={600}/>
        </div>   
      </div>          
    </section>

      <BlogIntro idNumber={1}/>
      <BlogRecorridoArg />
      <Footer />
      <BackToTopButton />
    </main>
  )
}
