import Link from "next/link";
import Image from "next/image";
import { Email, Ig, Phone, Ubi } from "./icons";

export function Footer(){
    return(      
        <footer className="flex flex-col w-full py-16 gap-16 px-5vw xl:px-0 items-center">
            <div className="grid grid-cols-1 xl:grid-cols-10 gap-8 w-full pt-16 pb-8 px-5vw border border-ecc_blue rounded-3xl max-w-screen-xl 2xl:max-w-screen-3xl">
                <div className="xl:col-span-3 flex flex-col gap-4">
                    <Link href='/'>
                        <Image
                            width={200}
                            height={200}
                            src='/images/logo_color.png'
                            className="hover:scale-110 transition-all duration-500"
                            quality={100}
                            alt='Servicio'>
                        </Image>
                    </Link>
                    <div className="text-xl font-medium">Para resolver cualquier duda sientase libre de contactarnos.</div>
                </div>
                <div className="xl:col-span-3 flex flex-col gap-6">
                    <h3 className="text-base font-bold uppercase">Contactos</h3>
                    <ul className="flex flex-col gap-2 font-light text-ecc_blue uppercase">
                        <a href="https://wa.me/18097701114" target="_blank" className="flex gap-2 items-center hover:text-ecc_red transition-all duration-300">
                        <Phone />809 770 1114
                        </a>
                        <a href="mailto:info@ecc-technology.com" target="_blank" className="flex gap-2 items-center hover:text-ecc_red transition-all duration-300">
                        <Email />info@ecc-technology.com
                        </a>
                        <a href="https://maps.app.goo.gl/pNhiWe3Tv65hghve7" target="_blank" className="flex gap-2 hover:text-ecc_red transition-all duration-300">
                        <Ubi />AV. LOS PRÓCERES,<br />NÚM. 10, BLOQUE 3/3, PISO 3,<br />República Dominicana
                        </a>
                    </ul>
                </div>
                <div className="xl:col-span-2 flex flex-col gap-6">
                    <h3 className="text-base font-bold uppercase">Redes sociales</h3>
                    <ul className="flex flex-col gap-2 font-medium text-ecc_blue uppercase">
                        <a href="https://www.instagram.com/ecc.technology/" target="_blank" className="flex gap-2 items-center hover:text-ecc_red transition-all duration-300">
                        <Ig />Visitar Instagram
                        </a>
                    </ul>
                </div>
                <div className="xl:col-span-2 flex flex-col gap-6">
                    <h3 className="text-base font-bold uppercase">Contactos</h3>
                    <ul className="flex flex-col gap-2 font-medium text-ecc_blue uppercase">
                        <Link className="hover:text-ecc_red transition-all duration-300" href='/'>Inicio</Link>
                        <Link className="hover:text-ecc_red transition-all duration-300" href='/us'>Nosotros</Link>
                        <Link className="hover:text-ecc_red transition-all duration-300" href='/services'>Servicios</Link>
                        <Link className="hover:text-ecc_red transition-all duration-300" href='/contact'>Contacto</Link>
                    </ul>
                </div>
                <div className="col-span-full text-center pt-8">ECC TECHNOLOGY © 2024 - Todos los derechos reservados.</div>
            </div>
        </footer>
    )
}