import Link from "next/link";


export default function Footer() {

  return (
    <div className="p-5 w-full gradient">

      <footer
        className="flex flex-col justify-center  text-sm text-white">

        <div className="flex flex-col gap-10 lg:gap-20 sm:flex-row justify-center p-10">
            <h5>© blogme. 2023</h5>

            <div className="flex flex-col space-y-2">
                <h6 className="uppercase font-semibold">Recomendados</h6>

                <Link href='https://www.youtube.com/@lethalcrysis' target="_blank">
                    Lethal Crisis
                </Link>
                
                <Link href='https://marcandoelpolo.com/' target="_blank">
                    Marcando el Polo
                </Link>

                <Link href='https://www.youtube.com/@luisitocomunica' target="_blank">
                    Luisito Comunica
                </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h6 className="uppercase font-semibold">Patrocinadores</h6>

              <Link href='https://www.instagram.com/proyectofeizer/' target="_blank">
                Proyecto Feizer</Link>

              <Link href='https://www.instagram.com/bajoelroble_distribuidora/' target="_blank">
                Bajo El Roble</Link>

              <Link href='https://www.carosio.com.ar/docs/' target="_blank">
                Sanitarios Carosio</Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h6 className="uppercase font-semibold">Prensa</h6>
              
              <Link href='https://www.facebook.com/somoschascomus/?locale=es_LA' target="_blank">
                Somos Chascomus</Link>
              
              <Link href='https://elsuplente.com/' target="_blank">
                Diario El Suplente</Link>
              
              <Link href='https://weekend.perfil.com/' target="_blank">
                Revista Weekend</Link>
            </div>
        </div>

        
        <div className="border-t border-white/70 text-center w-3/4 mx-auto">
            <h5 className="pt-5">Todos los derechos reservados - Sitio web desarrollado por{' '}
            <Link
              href='https://www.linkedin.com/in/martinolivera1989/' target="_blank"
              style={{ fontWeight: 'bold' }}>
                Martin Olivera
            </Link>
            </h5>
        </div>
       
      </footer>
    </div>
  )
}
