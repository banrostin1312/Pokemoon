"use client"
//Vendors
import { useState } from "react"
//Contexts
import { usePokemon } from "@/src/context/PokemonContext"

interface searchPokemonProps {
  onSearch: (term: string) => void;


}


const SearchPokemon: React.FC<searchPokemonProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term);
    onSearch(term);
  }

  return (
    <div className="flex flex-col items-center mt-36 text-white text-xl">
      <div className="flex w-full justify-between items-center">
        <div className="h-[46px] border border-white rounded-md w-32 bg-white bg-opacity-50 placeholder-white
        flex justify-center items-center
        ">
          Categorias
        </div>

        <input
          type="text"
          placeholder="Search Pokémon by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border border-white rounded-md w-[90%] bg-sky-800 bg-opacity-50 placeholder-white mr-2"
        />
      </div>
    </div>
  )
}

export default SearchPokemon