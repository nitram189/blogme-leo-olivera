
import { Raleway } from 'next/font/google';
import NavBar from '@/components/NavBar';
import './globals.css';
import { LibroProvider } from './LibroContext';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'blogme. - Home',
  description: 'Unite a este emocionante viaje mientras emprendemos épicas travesías en bicicleta por America Latina. Nuestro blog es un tesoro de historias inspiradoras, consejos prácticos y fotografías impresionantes que capturan la esencia de la aventura en dos ruedas! Desde recorrer la pampa Argentina hasta las playas ecuatorianas, compartiendo mis experiencias de primera mano, recomendaciones de rutas y conocimientos sobre equipo, tanto para ciclistas experimentados como para aventureros como yo. Ya seas un entusiasta del ciclismo o simplemente estes buscando relatos de aventuras, este blog te invita a descubrir mas acerca del mundo de las bicicletas. Subite a este recorrido virtual por el planeta, pedal a pedal.'
}


export default function RootLayout({ children }) {

  return (
    <html lang="es" className={ raleway.className }>
      
      <body id='libros'>
        <NavBar />

        <LibroProvider>
          {children}
        </LibroProvider>

      </body>
    </html>
  )
}
