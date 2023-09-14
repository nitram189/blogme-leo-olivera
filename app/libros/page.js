import { BookCard, Footer } from "@/components";
import { getLibros } from "@/services";

export const metadata = {
    title: 'blogme. - Libros',
    description: 'Apasionante lectura a través de mis dos libros de viajes. Historias, experiencias propias, tips de viaje y ahorro, y mucho para contar a traves de sus paginas. Pueblos, ciudades, provincias y paises, todo desde arriba de la bici.'
}

export default async function page() {

  const libros = await getLibros();

  return (
      <main>

        <section
          className="h-screen w-full flex flex-col justify-center bg-[url('/cover-libros.jpeg')] bg-cover bg-center bg-fixed">
          
          <div className="sm:w-3/4 w-full p-5 sm:p-10 lg:p-24 text-black/80">
            <h5 className="py-4 uppercase font-semibold">Libros</h5>
            <h2 className="text-5xl lg:text-6xl font-bold">Mis libros de viaje</h2>
            <p className="text-xl font-medium py-5 text-justify">Conocé más en mis historias a través de lugares y comunidades que fueron haciendo de cada viaje una experiencia unica.</p>
          </div>
        </section>

        { libros.length && (
            libros.map((libro) => (
              <BookCard
                key={ libro.id }
                libro={ libro }/>
            ))
        ) }

        <Footer />
      </main>
  )
}





