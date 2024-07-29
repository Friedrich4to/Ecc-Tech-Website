'use client'

export default function Home() {
  return (
    <main className="flex flex-col w-full py-16 gap-16 px-5vw xl:px-0 items-center">
    {/*PAGE_TITLE*/}
    <div className="flex flex-col items-end lg:flex-row gap-12 mt-36 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        <h2 className="font-black text-5xl lg:text-7xl uppercase">Pongamonos en contácto</h2>
    </div>

    {/*VIDEO LOOP*/}
    <div className="relative w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-12 p-4 lg:p-12 h-fit lg:h-50s w-full z-10 items-center justify-center">
            <div className="flex flex-col gap-4 bg-ecc_white w-full rounded-2xl">
                <div className="h-full lg:h-2/4 grid grid-cols-1 lg:grid-cols-8 gap-12 p-12">
                        <div className="flex flex-col col-span-2 gap-2">
                            <h3 className="flex items-center gap-2 text-xl font-medium uppercase"><span className="w-4 h-4 bg-ecc_blue"></span>Contacto</h3>
                            <p className="flex gap-2 text-2xl font-light">(809) 770 1114</p>
                        </div>

                        <div className="flex flex-col col-span-3 gap-2">
                            <h3 className="flex items-center gap-2 text-xl font-medium uppercase"><span className="w-4 h-4 bg-ecc_blue"></span>Correo Eletrónico</h3>
                            <p className="flex gap-2 text-2xl font-light">info@ecc-technology.com</p>
                        </div>
                        
                        <div className="flex flex-col col-span-3 gap-2">
                            <h3 className="flex items-center gap-2 text-xl font-medium uppercase"><span className="w-4 h-4 bg-ecc_blue"></span>Dirección</h3>
                            <p className="flex gap-2 text-2xl font-light">AV. LOS PRÓCERES, NÚM. 10, BLOQUE 3/3, PISO 3, Santo Domingo, República Dominicana.</p>
                        </div>
                    </div>

                    <div className="z-20 h-96 lg:h-2/4 rounded-b-3xl">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d945.9847323824424!2d-69.94285873036709!3d18.48642527081485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI5JzExLjEiTiA2OcKwNTYnMzIuMCJX!5e0!3m2!1sen!2sdo!4v1722226592635!5m2!1sen!2sdo"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    className="rounded-b-3xl"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
        <video autoPlay muted loop className="top-0 left-0 absolute object-cover w-full h-full rounded-3xl">
              <source src='/videos/cubes.mp4' type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
        </video>
    </div>

    </main>
    
  );
}
