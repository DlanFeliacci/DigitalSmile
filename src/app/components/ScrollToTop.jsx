'use client'
import React, { useEffect, useState } from 'react'
import { BiSolidUpArrow } from 'react-icons/bi'

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })
    }, []);

  return (
    <div className="fixed bottom-2 right-2 z-10">
      <button
        type="button"
        onClick={scrollToTop}
        style={{display: isVisible ? 'block':'none'}}
        className='bg-black inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none'
      >
        <BiSolidUpArrow className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export default ScrollToTop