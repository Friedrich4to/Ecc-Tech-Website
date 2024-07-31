'use client'

import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { BurgerIcon } from "./icons";

function MobileNav({open, setOpen}) {
  return (
      <div className={`absolute top-0 left-0 h-screen w-screen bg-ecc_white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
          <div className="flex flex-col p-8 text-ecc_blue font-medium rounded-xl items-center justify-center gap-16 h-full">
            <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" onClick={() => setTimeout(() => {setOpen(!open)}, 100)} href='/'>Inicio</Link>
            <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" onClick={() => setTimeout(() => {setOpen(!open)}, 100)} href='/us'>Nosotros</Link>
            <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" onClick={() => setTimeout(() => {setOpen(!open)}, 100)} href='/services'>Servicios</Link>
            <Link href='/contact' className="flex h-12 p-8 hover:scale-110 transition-all duration-500 text-ecc_white font-medium bg-ecc_red rounded-xl items-center" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Contacto</Link>
          </div>  
      </div>
  )
}

export function Header(){

    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      if (open) {
        setTimeout(() => {
          setOpen(!open);
        }, 100);
      }
    }

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
        <header className={`fixed top-0 z-50 flex flex-col w-full pt-16 gap-16 px-5vw xl:px-0 items-center transition-all duration-700 ${isScrolled ? 'bg-ecc_white' : ''}`}>
            <div className="flex items-center justify-between uppercase w-full py-4 pl-0 pr-4 max-w-screen-xl 2xl:max-w-screen-3xl">
                <Link href='/' className="z-50" onClick={handleClick}>
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
                    <div className="flex xl:hidden h-12 p-8 text-ecc_blue font-medium bg-ecc_white rounded-xl items-center z-50" onClick={() => {setOpen(!open)}}>
                      <BurgerIcon />
                    </div>
                    <div className="hidden xl:flex h-12 p-8 text-ecc_blue font-medium bg-ecc_white rounded-xl items-center gap-16">
                        <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" href='/'>Inicio</Link>
                        <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" href='/us'>Nosotros</Link>
                        <Link className="hover:text-ecc_red hover:scale-110 transition-all duration-500" href='/services'>Servicios</Link>
                    </div>
                    <Link href='/contact' className="hidden xl:flex h-12 p-8 hover:scale-110 transition-all duration-500 text-ecc_white font-medium bg-ecc_red rounded-xl items-center">Contacto</Link>
                </nav>
                <MobileNav open={open} setOpen={setOpen}/>
            </div>
        </header>
    )
}