import { BigBTN } from "./buttons";

export function C_CTA(){
    return(
        <div className="flex flex-col w-full py-16 gap-16 px-5vw 2xl:px-0 items-center">    
            <div className="flex flex-col lg:flex-row justify-between gap-8 w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
                <p className="text-5xl font-bold max-w-screen-sm">¿Interesado en nuestros servicios?</p>
                <BigBTN label='Pongamonos en contacto' url='/contact'/>
            </div>
        </div>  
    )
}