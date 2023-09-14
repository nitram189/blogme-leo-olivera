import { Contacto, Hero } from "@/components";


export default function Home() {

  return (
    <main  className="snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-y">

      <Hero
        titulo='Argentina'
        subtitulo='Desde Chascomús a San Juan en bicicleta'
        imagenUrl='url-img-1'
        linkName='Ver viaje'
        linkUrl='argentina'/>

      <Hero
         titulo='Sudamerica'
         subtitulo='Un viaje desde Chascomús a Montañitas en bicicleta'
         imagenUrl='url-img-2'
         linkName='Ver viaje'
         linkUrl='sudamerica'/>

      <Hero
         titulo='Centroamerica'
         subtitulo='Desde Ecuador hasta México de mochilero'
         imagenUrl='url-img-3'
         linkName='Ver viaje'
         linkUrl='centroamerica'/>

      <Hero
         titulo='Libros'
         subtitulo='Más historias para contar y compartir'
         imagenUrl='url-img-4'
         linkName='Ver libros'
         linkUrl='libros'/>

      <Contacto
         titulo='Contacto'
         subtitulo='Encontrame en mis redes sociales y hablemos!'
         imagenUrl='url-img-5'
         linkName='Ver redes'
         linkUrl='contacto'/>
    </main>
  );
};