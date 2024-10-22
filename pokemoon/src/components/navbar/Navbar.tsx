"use client"

//Vendors
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div>
            <ul className="flex flex-col md:flex-row justify-center items-center gap-7 m-4 text-2xl font-extrabold 
            bg-white bg-opacity-35 rounded-lg md:h-20
            ">
                <Link href={"/"} className="hover:text-blue-700 transition-colors duration-300"><li className={`${pathname === "/" ?
                    "underline decoration-blue-700 underline-offset-8 decoration-4" : ""
                    }`}>Pokemons</li></Link>

                <Link href={"/about"} className="hover:text-lime-600 transition-colors duration-300"><li className={`${pathname === "/about" ?
                    "underline decoration-lime-600 underline-offset-8 decoration-4" : ""}`}>About</li></Link>

                <Link href={"/"}><li className="transition-colors duration-300 hover:text-blue-700">Contact</li></Link>
            </ul>
        </div>
    )
}

export default Navbar