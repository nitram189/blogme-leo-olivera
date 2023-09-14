import { BackToTopButton, ResumenArg, YouTubeVideo } from "@/components";

export const metadata = {
  title: 'blogme. - Sudamerica',
  description: 'Mi segunda y gran aventura en bicicleta en la que viaje desde mi pueblo Chascomus en Argentina hasta Montanitas en Ecuador. Viaje a traves de cuatro paises reuniendo mucha experiencia de vida mediante un aprendizaje constante. Muchas historias para contar en este espectacular blog que resume mi viaje por Sudamerica a traves de textos, fotos y videos.'
}

export default function page() {

  return (
    <main className="bg-black">

    <section className="h-screen w-full p-5 md:p-10 lg:px-32 mx-auto bg-[url('/cover-fotos/sud-cover.jpeg')] bg-cover bg-center bg-fixed">

      <div className="flex flex-col justify-center items-center h-1/2">
        <h1 className="text-5xl lg:text-6xl font-bold py-3 text-black/80">Mi viaje por Sudamerica</h1>

        <p className="text-xl font-medium mb-10 text-black/80">Pedaleando por Argentina, Bolivia, Peru y Ecuador</p>
      </div>
    </section>

    <section className="text-white/90 px-5 md:px-10 py-16 lg:w-3/4 mx-auto bg-black">

      <div className="flex flex-col items-center justify-between">

        <div className="w-full">

          <h5 className="text-5xl font-semibold">Resumen del viaje</h5>

          <ResumenArg
            distancia='6850'
            dias='86'
            horas='445'  
            dinero='16000' />
        </div>

        <div className="w-full h-full md:w-8/12 mx-auto">
          <YouTubeVideo linkId={'guO4Kg5gKRY&t=6s'}/>
        </div>   
      </div>          
    </section>

    <section className="py-32 bg-white">
      <div className="flex justify-center">
        <p className="border-2 rounded-lg px-16 py-10">El contenido de esta entrada se encuentra bajo revisión del autor.</p>
      </div>
    </section>
    
    <BackToTopButton/>
  </main>
  )
}
