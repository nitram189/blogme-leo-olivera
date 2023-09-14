import Link from "next/link";


export default function Hero({ titulo, subtitulo, linkName, linkUrl, imagenUrl }) {


  return (
    <section
      id={ linkUrl }
      className={`flex justify-center h-screen bg-center bg-cover p-5 md:p-10 lg:px-32 snap-center ${ imagenUrl }`}>

      <div className="text-black/80 z-[2] flex flex-col gap-4 justify-center items-center h-1/2">
        
        <h2 className="text-5xl lg:text-6xl font-bold">{ titulo }</h2>
        
        <p className="text-xl font-medium text-center">{ subtitulo }</p>
        
        <Link
          href={`/${ linkUrl }`}
          className="hero-button">
            { linkName }
        </Link>
      </div>
    </section>
  )
}
