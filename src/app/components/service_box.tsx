import Image from "next/image";

export function ServiceBox_Landing(props){

    return(
    <div className="flex flex-col w-full h-[450px] [&>*]:w-full">

        <div className="h-fit lg:h-3/6 flex flex-col gap-4 p-12 bg-ecc_low_blue text-ecc_blue rounded-t-3xl">
            <h2 className="text-2xl font-extrabold">{props.title}</h2>
            <p className="text-base lg:text-xl xl:text-base">{props.paragraph}</p>
        </div>

        <div className="h-3/6 relative rounded-b-3xl">
            <Image
            fill
            src={props.image}
            quality={80}
            loading = 'lazy'
            className="object-cover rounded-b-3xl"
            alt='Servicio'>
            </Image>
        </div>

    </div>
  )
}

export function ServiceBox_Services(props){
    return(
        <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-2/6 h-48 lg:h-96 relative">
                <Image
                    fill
                    src={props.image}
                    quality={80}
                    loading = 'lazy'
                    className="object-cover rounded-tl-3xl rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-tr-none"
                    alt='Servicio'>
                </Image>
            </div>
            <div className="w-full lg:w-4/6 flex flex-col p-8 rounded-bl-3xl rounded-br-3xl lg:rounded-bl-none lg:rounded-tr-3xl bg-ecc_low_blue text-ecc_blue gap-4 xl:gap-8">
                <h1 className="text-4xl lg:text-5xl font-bold">{props.title}</h1>
                <div className="flex flex-col gap-4">
                    <p className="text-lg lg:text-2xl">{props.first_paragraph}</p>
                    <p className="text-lg lg:text-2xl hidden lg:block">{props.second_paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export function Team_Member(props){
    return(
        <div className="flex flex-col w-full h-50s gap-2">
            <div className="relative h-4/5 w-full">
                <Image
                fill
                src={props.image}
                quality={80}
                loading = 'lazy'
                className="object-cover rounded-3xl"
                alt='Miembro del equipo'>
                </Image>
            </div>
            <div className="h-1/5 flex flex-col w-full">
                <h1 className="text-4xl font-semibold">{props.name}</h1>
                <span className="text-2xl font-medium uppercase text-ecc_blue">{props.job}</span>
            </div>
        </div>        
    )
}