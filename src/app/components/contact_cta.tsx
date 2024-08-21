import { BigBTN } from "./buttons";

export function C_CTA(){
    return(
        <div className="flex flex-col w-full py-16 gap-16 px-5vw 2xl:px-0 items-center">    
            <div className="flex justify-between w-full h-fit max-w-screen-xl 2xl:max-w-screen-3xl">
                <p className="text-6xl font-bold max-w-screen-sm">¿Interesado en nuestros servicios?</p>
                <BigBTN label='Pongamonos en contacto' url='/contact'/>
            </div>
        </div>  
    )
}