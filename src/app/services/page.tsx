'use client'

import { ServiceBox_Services } from "../components/service_box";

export default function Home() {
  return (
    <main className="flex flex-col w-full py-16 gap-16 px-5vw xl:px-0 items-center">
    {/*PAGE_TITLE*/}
    <div className="flex flex-col items-end lg:flex-row gap-12 mt-36 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        <h2 className="font-black text-5xl lg:text-7xl uppercase">Cubrimos todas sus<br />necesidades tecnológicas.</h2>
    </div>

    {/*PAGE_TITLE*/}
    <div className="flex flex-col gap-12 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        {/*1*/}
        <ServiceBox_Services 
        image='/images/services/data.jpg' 
        title='Implementación de redes de datos' 
        first_paragraph='Nos encargamos de desplegar todas las conexiones para asegurarle una interconectividad estable.' 
        second_paragraph='Todo esto junto a un diseño e implementación de cableado estructurado y redes inalámbricas que garantizan la conectividad de toda la organización.'
        />
        {/*2*/}
        <ServiceBox_Services 
        image='/images/services/security.jpg' 
        title='Equipos de seguridad informática' 
        first_paragraph='Instalamos de manera profesional hardware y software que protegerá sus datos.' 
        second_paragraph='Para nosotros la ciberseguridad es un habilitador de los negocios que permite aprovechar el mundo digital sin preocupaciones.'
        />
        {/*3*/}
        <ServiceBox_Services 
        image='/images/services/automatic.jpg' 
        title='Automatización de procesos tecnológicos' 
        first_paragraph='Agilizamos los diversos procesos de su empresa, negocio o institución en el apartado de la tecnología.' 
        second_paragraph='Mediante la implementación de sistemas, logramos que las tareas de su empresa funcionen de manera más eficiente.'
        />
        {/*4*/}
        <ServiceBox_Services 
        image='/images/services/cloud.jpg' 
        title='Servicios en la nube' 
        first_paragraph='Implementamos sistemas de guardado y sincronización en la nube para mejorar la eficiencia del trabajo en conjunto dentro de su empresa.' 
        second_paragraph='Te acompañamos a desarrollar la mejor estrategia de correr y mantener tus aplicaciones de una manera ágil, segura y eficiente.'
        />
        {/*5*/}
        <ServiceBox_Services 
        image='/images/services/app.jpg' 
        title='Aplicaciones para negocios.' 
        first_paragraph='Desarrollamos diversos sistemas y softwares personalizados para las necesidades de su empresa.' 
        second_paragraph='Esto permite que su empresa posea las herramientas necesarias para cumplir con sus objetivos de la mejor manera posible.'
        />
        {/*6*/}
        <ServiceBox_Services 
        image='/images/services/out.jpg' 
        title='Outsourcing' 
        first_paragraph='Si tu equipo necesita apoyo para el desarrollo o mantenimiento de software o redes de conectividad, nuestra empresa ofrece servicios de outsourcing altamente especializados. ' 
        second_paragraph='Contamos con un equipo de profesionales experimentados que pueden integrarse fácilmente a tus proyectos, ya sea para tareas puntuales o para colaborar de manera continua.'
        />
    </div> 

    </main>
    
  );
}
