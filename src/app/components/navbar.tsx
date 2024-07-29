'use client'

import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from "next/image";

export function Header(){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(      
        <header className={`fixed z-50 flex flex-col w-full pt-16 gap-16 px-5vw xl:px-0 items-center transition-all duration-7000 ${isScrolled ? 'bg-ecc_white' : ''}`}>
            <div className="flex items-center justify-between uppercase w-full py-4 pl-0 pr-4 max-w-screen-xl 2xl:max-w-screen-3xl">
                <Link href='/'>
                  <Image
                    width={160}
                    height={200}
                    src='/images/logo_color.png'
                    className="hover:scale-110 transition-all duration-500"
                    quality={100}
                    alt='Logo'>
                  </Image>
                </Link>
                <nav className="flex gap-8">
                    <div className="h-12 p-8 text-ecc_blue font-medium bg-ecc_white rounded-xl flex items-center gap-16">
                        <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" href='/'>Inicio</Link>
                        <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" href='/us'>Nosotros</Link>
                        <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" href='/services'>Servicios</Link>
                    </div>
                    <Link href='/contact' className="h-12 p-8 hover:scale-110 transition-all duration-500 text-ecc_white font-medium bg-ecc_red rounded-xl flex items-center">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}