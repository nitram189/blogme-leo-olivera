"use client"

import { useEffect, useState } from "react";

export default function BackToTopButton() {

  const [ isVisible, setIsVisible ] = useState( false );

  useEffect(() => {
    window.addEventListener( 'scroll', handleScroll );
    return () => {
      window.removeEventListener( 'scroll', handleScroll );
    }
  }, [])

  const handleScroll = () => {
    if( window.scrollY > 100 ) {
      setIsVisible( true )
    } 
    else {
      setIsVisible( false )
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={ scrollToTop }
      className={`fixed bottom-10 right-0 ${ isVisible ? 'opacity-100' : 'opacity-0' } p-1 rounded-l bg-black/50 text-white`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}
