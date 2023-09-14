'use client';

import { useState } from "react";
import Image from "next/image";

export default function Slider({ slides }) {

  const [ currentIndex, setCurrentIndex ] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex( newIndex )
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex( newIndex )
  }
  
  return (
    <div className="group w-11/12 mx-auto flex justify-center py-5">

      <div className="rounded-lg bg-center bg-cover duration-500 relative">
          <Image
            src={ slides[ currentIndex ].imagen }
            alt={`Foto acerca de: ${ slides.caption }`}
            width={700}
            height={700}
            className="rounded-md"
            />
          <p className="pt-2 text-sm">{ slides[ currentIndex ].caption }</p>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <svg
            onClick={ prevSlide }
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <svg
            onClick={ nextSlide }
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>

    </div>
  )
}
