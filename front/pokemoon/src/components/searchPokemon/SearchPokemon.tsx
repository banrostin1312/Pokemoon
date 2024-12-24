"use client"
//Vendors
import { useState } from "react"
import Select from "react-select";
import Image from "next/image";
//Helpers
import categories from "@/src/helpers/categories";

interface searchPokemonProps {
  onSearch: (term: string) => void;
  onCategorySelect: (category: string) => void;

}


const SearchPokemon: React.FC<searchPokemonProps> = ({ onSearch, onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<{ value: string; label: string } | null>(null)
  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term);
    onSearch(term);
  }

  const handleCategoryChange = (selectedOption: { value: string; label: string } | null) => {
    setSelectedCategory(selectedOption);

    const selectedCategoryValue = selectedOption ? selectedOption.value : "";

    onCategorySelect(selectedCategoryValue)

    if (selectedCategoryValue === "all") {
      onSearch("");
    }
  }

  return (
    
    <div className="flex flex-col items-center mt-32 text-white w-full p-4 max-w-screen-xl mx-auto bg-slate-800 bg-opacity-90 mb-36">
      <h1 className="text-4xl font-bold mb-4">PokeDex</h1>
        <h2 className="text-xl mb-2 text-center">Busca a tu pokémon por su nombre o filtra por tipos.</h2>
      <div className="w-full max-w-md">
       <div className="flex flex-row gap-8">
        <Image src={"/assets/search.svg"} alt="Lupa" height={100} width={100}
        className="w-6 h-10"
        ></Image>
       <input
          type="text"
          placeholder="Search Pokémon by name......"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border border-white rounded-md w-full bg-sky-800 bg-opacity-50 placeholder-white mb-4"
          aria-label="Search Pokémon"
        />
       </div>
        <div className=" flex flex-row gap-8">
          <Image src={"/assets/category.svg"} alt="search" height={100} width={100}
          className="w-7 h-10"
          ></Image>
          <Select
            options={categories}
            onChange={handleCategoryChange}
            placeholder="Category"
            value={selectedCategory}
            className="w-full"
            styles={{
              control: (provided) => ({
                ...provided,
                height: "55px",
                border: "1px solid white",
                borderRadius: "0.375rem",
                backgroundColor: "rgba(7, 89, 133, 0.5)",
                color: "white",
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: "rgba(176, 165, 165, 0.4)",
                zIndex: 100,
              }),
              menuList: (provided) => ({
                ...provided,
                maxHeight: "150px",
                overflowY: "auto",
              }),
              option: (provided, { isFocused, isSelected }) => ({
                ...provided,
                color: "white",
                backgroundColor: isSelected
                  ? "rgba(0, 0, 0, 0.8)"
                  : isFocused
                  ? "rgba(100, 100, 100, 0.5)"
                  : "rgba(0, 0, 0, 0.5)",
                padding: "10px 15px",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "white",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "white",
              }),
            }}
            aria-label="Select category"
          />
        </div>
      </div>
    </div>
    
  )
}

export default SearchPokemon