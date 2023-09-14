import Link from "next/link";
import { HeroFooter } from ".";

export default function Contacto({ titulo, subtitulo, linkUrl, imagenUrl, linkName }) {

  return (
    <section
      id={linkUrl}
      className={`h-screen bg-center bg-cover snap-center ${ imagenUrl } `}>

      <div className="text-black/70 flex flex-col gap-4 justify-between items-center h-screen">

        <div className="mt-36 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold">{titulo}</h2>

          <p className="text-xl font-medium py-5 text-center">{subtitulo}</p>

          <div>
            <Link
              href={`/${linkUrl}`}
              className="hero-button">
                {linkName}
            </Link>
          </div>
        </div>

        <HeroFooter />
      </div>
    </section>
  )
}
