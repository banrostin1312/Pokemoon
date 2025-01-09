"use client"
//Vendors
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
//Styles
import "./navbar.css"

const Navbar:React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);



    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }



    return (
        <div>
            <ul className="flex flex-col md:flex-row justify-between items-center gap-7  text-2xl font-extrabold 
            md:bg-black md:bg-opacity-85 rounded-lg md:h-20  fixed top-0 left-0 right-0 w-[100%] mx-auto z-50 transition-opacity duration-300
            "

            >
                <Link href={"/"}><Image src={"/assets/pokeball-icon.png"} alt="pokeball-icon" height={120} width={120}
                    className="mt-11 hover:scale-75 transform transition-transform duration-500 cursor-pointer
                    hover:border-2 rounded-full border-stone-950 shadow-lg hidden md:block
                    " /></Link>

                <button className="md:hidden focus:outline-none flex flex-col items-center absolute top-4 right-1" onClick={toogleMenu}>
                    <Image src={"assets/pokemon-menu.svg"} alt="pokemon sm menu" height={40} width={40}
                        className="cursor-pointer"
                    />
                    <p className="text-lg">Menu</p>
                </button>

                <div className={`hidden flex-col md:flex-row md:gap-10 md:mr-4 md:flex`}>

                    <Link href={"/"} className="p-3 first-btn"><li className={`${pathname === "/" ?
                        "underline decoration-blue-800 underline-offset-8 decoration-2" : ""
                        }`}>Home</li></Link>

                    <Link href={"/pokedex"} className="p-3 second-btn"><li className={`${pathname === "/pokedex" ?
                        "underline decoration-green-300 underline-offset-8 decoration-2" : ""}`}>PokeDex</li></Link>

                    <Link href={"/pokeapps"} className="p-3 third-btn"><li className={`
                        ${pathname === "/pokeapps" ? "underline decoration-red-700 underline-offset-8 decoration-2" : ""}
                        `}>Apps</li></Link>
                </div>
            </ul>


            <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}

            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-2xl font-bold">Menu</h2>
                    <button onClick={toogleMenu} className="text-xl font-bold">
                        ✖️
                    </button>
                </div>
                <ul className="flex flex-col p-4">
                    <Link href={"/"} onClick={toogleMenu}>
                        <li className="py-2 hover:text-blue-700">Home</li>
                    </Link>
                    <Link href={"/pokedex"} onClick={toogleMenu}>
                        <li className="py-2 hover:text-lime-600">PokeDex</li>
                    </Link>
                    <Link href={"/pokeapps"} onClick={toogleMenu}>
                        <li className="py-2 hover:text-red-700">Apps</li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}

export default Navbar