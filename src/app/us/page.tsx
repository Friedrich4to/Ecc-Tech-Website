'use client'

import { Team_Member } from "../components/service_box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full py-16 gap-16 px-5vw xl:px-0 items-center">
      {/*HERO*/}
      <div className="flex flex-col xl:items-end xl:flex-row mt-36 gap-12 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        {/*hero_text_col*/}
        <div className="xl:w-2/6 w-full flex flex-col gap-4 xl:gap-12 xl:pb-12">
          <h1 className="font-black text-5xl lg:text-7xl uppercase">Rodeados de expertos</h1>
          <p className="text-xl">Nuestro equipo es el resultado de cada una de las experiencias adquiridas en el transcurso del desarrollo de ECC Technology y los servicios ofrecidos por nuestra empresa.</p>
        </div>
        {/*hero_image_col*/}
        <div className="relative xl:w-4/6 w-full h-50s">
          <Image
            fill
            src='/images/team.png'
            quality={80}
            loading = 'lazy'
            className="object-cover rounded-3xl"
            alt='Servicio'>
          </Image>
        </div>
      </div>

      {/*Who are we*/}
      <div className="flex flex-col gap-2 py-12 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
          <h1 className="font-black text-3xl uppercase text-ecc_blue">Acerca de nosotros</h1>
          <p className="text-2xl lg:text-4xl w-3/4">Somos una compañía que busca incrementar la productividad y competitividad de medianas y grandes empresas mediante el uso de nuevas tecnologías.</p>
      </div>
 
      {/*VIDEO LOOP*/}
      <div className="relative w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-12 p-4 lg:p-12 h-full w-full z-10 items-center justify-center">
          <div className="flex flex-col gap-4 bg-ecc_white h-fit lg:h-[280px] w-full p-12 rounded-2xl">
            <h3 className="text-4xl font-bold">Misión</h3>
            <p>Proveer soluciones tecnológicas innovadoras con una inversión justa, apoyados en un personal apasionado, motivado y capacitado, con altos valores corporativos y humanos.</p>
          </div>
          <div className="bg-ecc_white h-fit lg:h-[280px] w-full p-12 rounded-2xl">
            <h3 className="text-4xl font-bold">Visión</h3>
            <p>Convertirnos en los líderes de el mercado de soluciones tecnológicas de toda la República Dominicana.</p>
          </div>
          <div className="bg-ecc_white h-fit lg:h-[280px] w-full p-12 rounded-2xl">
            <h3 className="text-4xl font-bold">Valores</h3>
            <ul>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Liderazgo</li>
              <li>Integridad</li>
            </ul>
          </div>
        </div>
        <video autoPlay muted loop className="top-0 left-0 absolute object-cover w-full h-full rounded-3xl">
              <source src='/videos/cubes.mp4' type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
        </video>
      </div>

      {/*TEAM*/}
      <div className="flex flex-col gap-8 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        <h2 className="font-black text-3xl uppercase text-ecc_blue">Nuestro equipo de trabajo</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
          <Team_Member image='/images/team/team_1.jpg' name='' job=''/>
          <Team_Member image='/images/team/team_2.jpg' name='' job=''/>
          <Team_Member image='/images/team/team_3.jpg' name='' job=''/>
          <Team_Member image='/images/team/team_4.jpg' name='' job=''/>
        </div>
      </div>     

    </main>
    
  );
}
