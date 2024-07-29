'use client'

import Image from "next/image";
import { BigBTN } from "./components/buttons";
import { ServiceBox_Landing } from "./components/service_box";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full py-16 gap-16 px-5vw xl:px-0 items-center">
      {/*HERO*/}
      <div className="flex flex-col items-end lg:flex-row gap-12 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        {/*hero_text_col*/}
        <div className="w-2-6 h-full flex flex-col gap-12 pb-20">
          <h1 className="font-black text-5xl lg:text-7xl uppercase">Soluciones Tecnológicas.</h1>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 items-center"><span className="w-4 h-4 bg-ecc_blue"></span><h1 className="text-ecc_blue text-2xl xl:text-3xl font-normal">Redes de Acceso</h1></li>
            <li className="flex gap-3 items-center"><span className="w-4 h-4 bg-ecc_blue"></span><h1 className="text-ecc_blue text-2xl xl:text-3xl font-normal">Ciberseguridad</h1></li>
            <li className="flex gap-3 items-center"><span className="w-4 h-4 bg-ecc_blue"></span><h1 className="text-ecc_blue text-2xl xl:text-3xl font-normal">Servicio en la Nube</h1></li>
            <li className="flex gap-3 items-center"><span className="w-4 h-4 bg-ecc_blue"></span><h1 className="text-ecc_blue text-2xl xl:text-3xl font-normal">Aplicaciones de Negocios</h1></li>
          </ul>
          <BigBTN label='Pongamonos en contacto'/>
        </div>
        {/*hero_image_col*/}
        <div className="w-4-6 h-80s">
            <video autoPlay muted loop className="object-cover h-full rounded-3xl">
              <source src='/videos/moving_tech.mp4' type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </div>

      {/*BRANDS*/}
      <div className="flex justify-between w-full">
        <div className="w-16 p-4 bg-slate-600 hidden xl:block"></div>
        <div className="w-full max-w-3xl">
          <div className="text-center text-lg py-6 text-ecc_gray"><p>Somos Technological Partners de <br />los fabricantes más importantes en el área:</p></div>
          <div className="grid grid-cols-2 lg:grid-cols-6 items-center justify-center place-items-center gap-2 lg:gap-12">
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
            <div className="h-24 w-full bg-slate-400"></div>
          </div>
        </div>
        <div className="w-16 p-4 bg-slate-600 hidden xl:block"></div>
      </div>

      {/*VIDEO LOOP*/}
      <div className="relative w-full h-96 max-w-screen-xl 2xl:max-w-screen-3xl">
        <h2 className="absolute inset-0 flex items-center justify-center uppercase font-black text-3xl lg:text-7xl text-center z-10 text-ecc_white">
          Implementaciones <br /> Tecnológicas
        </h2>
        <video autoPlay muted loop className="object-cover w-full h-full rounded-3xl">
          <source src='/videos/moving_tech.mp4' type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>

      {/*SERVICIOS*/}
      <div className="flex flex-col items-center gap-12 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        <div className="flex flex-col gap-12 lg:flex-row">
          <ServiceBox_Landing 
          title='Implementación de redes de acceso' 
          paragraph='Diseño e implementación de cableado estructurado y redes inalámbricas que garantizan la conectividad de la empresa.' 
          image='/images/placeholder.jpg'/>
          <ServiceBox_Landing 
          title='Equipos de seguridad informática.' 
          paragraph='Instalamos de manera profesional hardware y software que protegerá sus datos.' 
          image='/images/placeholder.jpg'/>
          <ServiceBox_Landing 
          title='Automatización de procesos tecnológicos.' 
          paragraph='Agilizamos los diversos procesos de su empresa, negocio o institución en el apartado de la tecnología.' 
          image='/images/placeholder.jpg'/>
        </div>
        <Link href='/services' className="text-ecc_red text-2xl font-semibold hover:scale-110 transition-all duration-500 border border-ecc_red p-12 rounded-xl">Descubrir todos los servicios</Link>
      </div>   
    </main>
    
  );
}
