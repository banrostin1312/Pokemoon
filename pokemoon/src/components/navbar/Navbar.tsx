"use client"
//Vendors
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"


const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <ul className="flex flex-col md:flex-row justify-between items-center gap-7 m-4 text-2xl font-extrabold 
            bg-white bg-opacity-35 rounded-lg md:h-20
            ">
                <Link href={"/"}><Image src={"/assets/pokeball-icon.png"} alt="pokeball-icon" height={120} width={120}
                    className="mt-5 hover:scale-75 transform transition-transform duration-500 cursor-pointer
                    hover:border-2 rounded-full border-stone-950 shadow-lg 
                    " /></Link>

                <button className="md:hidden focus:outline-none " onClick={toogleMenu}>
                    <Image src={"assets/pokemon-menu.svg"} alt="pokemon sm menu" height={40} width={40}
                        className="cursor-pointer"
                    />
                </button>

                <div className={`hidden flex-col md:flex-row md:gap-10 md:mr-4 md:flex`}>

                    <Link href={"/"} className="hover:text-blue-700 transition-colors duration-300"><li className={`${pathname === "/" ?
                        "underline decoration-blue-700 underline-offset-8 decoration-4" : ""
                        }`}>Pokemons</li></Link>

                    <Link href={"/about"} className="hover:text-lime-600 transition-colors duration-300"><li className={`${pathname === "/about" ?
                        "underline decoration-lime-600 underline-offset-8 decoration-4" : ""}`}>About</li></Link>

                    <Link href={"/"}><li className="transition-colors duration-300 hover:text-blue-700">Contact</li></Link>
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
                        <li className="py-2 hover:text-blue-700">Pokemons</li>
                    </Link>
                    <Link href={"/about"} onClick={toogleMenu}>
                        <li className="py-2 hover:text-lime-600">About</li>
                    </Link>
                    <Link href={"/"} onClick={toogleMenu}>
                        <li className="py-2 hover:text-blue-700">Contact</li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}

export default Navbar