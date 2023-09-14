import { BackToTopButton, BlogIntro, BlogRecorridoCen, Footer, ResumenCentro, YouTubeVideo } from "@/components";

export const metadata = {
  title: 'blogme. - Centroamerica',
  description: 'Esta entrada repasa mi viaje de mochilero por centroamerica y Mexico. Un viaje muy diferente a los anteriores donde el foco se centra en disfrutar de la aventura de conocer nuevas culturas, tradiciones y comunidades en las que nos sentimos muy bien recibidos en todos los paises que recorrimos. Por momentos viajando solo y por otros viajando con amigos. Siempre tratando de estar en contacto con la naturaleza lo mas posible.'
}

export default async function page() {

  return (
    <main className="bg-black">

      <section className="h-screen w-full p-10 bg-[url('/cover-fotos/cen-cover.jpeg')] bg-cover bg-top-left bg-fixed">

        <div className="flex flex-col justify-center h-1/2 md:text-center">

          <h1 className="text-5xl lg:text-6xl font-bold py-3 text-black/80">Centroamerica de mochilero</h1>

          <p className="text-xl font-medium mb-10 text-black/80">Una experiencia diferente a las anteriores.</p>
        </div>
      </section>

      <section className="text-white/90 px-5 md:px-10 py-16 lg:w-3/4 mx-auto bg-black">

        <div className="flex flex-col items-center justify-between">

          <div className="w-full">
            <h5 className="text-5xl font-semibold">Resumen del viaje</h5>

            <ResumenCentro
              paises='4'
              meses='8'
              dinero='62000'/>
          </div>

          <div className="w-full h-full md:w-8/12 mx-auto">
            <YouTubeVideo linkId={'GBWP0OU2hlM&feature=youtu.be'}/>
          </div>   
        </div>          
      </section>

      <BlogIntro idNumber={2}/>
      <BlogRecorridoCen />
      <Footer />
      <BackToTopButton />
    </main>
  )
}