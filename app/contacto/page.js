import { ContactCard, ContactForm, Footer } from "@/components";

export const metadata = {
  title: 'blogme. - Contacto',
  description: 'Conoce mas en mi canal de YouTube, y contactame por cualquier consulta que tengas '
}

export default async function page() {

  return (
    <main>

      <section className="h-screen w-full flex flex-col justify-center bg-[url('/cover-fotos/contacto-cover.jpeg')] bg-cover bg-left sm:center lg:bg-top bg-fixed">

        <div className="sm:w-3/4 w-full p-5 sm:p-10 lg:p-24 text-black/80">
          <h5 className="py-4 uppercase font-semibold">Contacto</h5>
          <h2 className="text-5xl lg:text-6xl font-bold">Hola gente viajera!</h2>
          <p className="text-xl font-medium py-5">Si queres contactarte conmigo podes hacerlo a traves de YouTube, Instagram, Facebook, o completando el formulario que se encuentra debajo.</p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-500 to-black px-5 py-10 sm:p-10 w-full">

        <div className="flex flex-col items-center gap-10 sm:flex-row lg:w-3/4 w-full mx-auto">

          <div className="sm:w-1/2 w-full">

            <h5 className="text-5xl lg:text-6xl font-bold text-white">Mis redes sociales</h5>

            <p className="text-xl py-4 text-white">Descubri todo el contenido de mis redes en las siguientes tarjetas. Videos, galerias de fotos y mis mas recientes post con toda la data para viajeros que disfrutan de la aventura!</p>
          </div>

          <div className="py-5 sm:py-10 sm:w-1/2 w-3/4 flex flex-col gap-5">

            <ContactCard
              netImage='https://yt3.googleusercontent.com/ytc/AOPolaQyEcQiqgvfE3rjSl2EVioxgS9eeh7-nv5mAwv2=s176-c-k-c0x00ffffff-no-rj'
              netName='YouTube'
              username='Leo Olivera'
              netLink='https://www.youtube.com/@leoolivera7717' />

            <ContactCard
              netImage='/instagram-profile.jpeg'
              netName='Instagram'
              username='@leo.olivera8'
              netLink='https://www.instagram.com/leo.olivera8' />

            <ContactCard
              netImage='/facebook-profile.jpeg'
              netName='Facebook'
              username='Leo Olivera'
              netLink='https://www.facebook.com/leo.olivera.98' />
          </div>
        </div>

      </section>

      <section className="bg-black px-5 py-10 sm:px-10 sm:py-16 w-full">

        <div className="lg:w-3/4 w-full mx-auto">
          <h5 className="text-5xl lg:text-6xl font-bold text-white pb-10">Formulario de contacto</h5>
          <ContactForm />
        </div>
      </section>

      <Footer />


    </main>
  )
}
