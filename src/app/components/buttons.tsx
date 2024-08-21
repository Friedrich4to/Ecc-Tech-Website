export function BigBTN(props){
    return(
        <button>
            <a 
                href={props.url}
                className="flex items-center pl-12 pr-36 py-10 w-fit text-lg text-ecc_white uppercase rounded-xl bg-ecc_red border border-ecc_red 
                hover:scale-110 hover:bg-transparent hover:text-ecc_red transition-all duration-500">
                {props.label}
            </a>
        </button>
    )
}