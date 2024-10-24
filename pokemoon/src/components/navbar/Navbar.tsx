"use client"
//Vendors
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"


const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(1);


    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const newOpacity = Math.max(1 - scrollTop / 200,0.3); 
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <ul className="flex flex-col md:flex-row justify-between items-center gap-7  text-2xl font-extrabold 
            bg-red-500  rounded-lg md:h-20 fixed top-0 left-0 right-0 w-[100%] mx-auto z-50 transition-opacity duration-300
            "
                style={{ opacity:opacity }}
            >
                <Link href={"/"}><Image src={"/assets/pokeball-icon.png"} alt="pokeball-icon" height={120} width={120}
                    className="mt-11 hover:scale-75 transform transition-transform duration-500 cursor-pointer
                    hover:border-2 rounded-full border-stone-950 shadow-lg 
                    " /></Link>

                <button className="md:hidden focus:outline-none flex flex-col items-center" onClick={toogleMenu}>
                    <Image src={"assets/pokemon-menu.svg"} alt="pokemon sm menu" height={40} width={40}
                        className="cursor-pointer"
                    />
                    <p className="text-lg">Menu</p>
                </button>

                <div className={`hidden flex-col md:flex-row md:gap-10 md:mr-4 md:flex`}>

                    <Link href={"/"} className="hover:text-blue-700 transition-colors duration-300"><li className={`${pathname === "/" ?
                        "underline decoration-blue-700 underline-offset-8 decoration-4" : ""
                        }`}>Home</li></Link>

                    <Link href={"/pokedex"} className="hover:text-lime-600 transition-colors duration-300"><li className={`${pathname === "/pokedex" ?
                        "underline decoration-lime-600 underline-offset-8 decoration-4" : ""}`}>PokeDex</li></Link>

                    <Link href={"/pokeapps"} className="transition-colors duration-300 hover:text-red-700"><li className={`
                        ${pathname === "/pokeapps" ? "underline decoration-red-700 underline-offset-8 decoration-4" : ""}
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