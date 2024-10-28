"use client"
//Vendors
import { useState } from "react"
import Select from "react-select";
//Contexts

interface searchPokemonProps {
  onSearch: (term: string) => void;
  onCategorySelect: (category: string) => void;

}


const SearchPokemon: React.FC<searchPokemonProps> = ({ onSearch, onCategorySelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<{ value: string; label: string } | null>(null)
  const categories = [
    { value: "all", label: "Todos" },
    { value: "grass", label: "Grass" },
    { value: "fire", label: "Fire" },
    { value: "water", label: "Water" },
    { value: "bug", label: "Bug" },
    { value: "normal", label: "Normal" },
  ];

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
    <div className="flex flex-col items-center mt-36 text-white text-xl">
      <div className="flex w-full justify-between items-center">
        <Select
          options={categories}
          onChange={handleCategoryChange}
          className="w-32"
          placeholder="Seleccionar categoría"
          value={selectedCategory}
          styles={{
            control: (provided) => ({
              ...provided,
              height: "55px", // Altura del botón del select
              border: "1px solid white", // Borde
              borderRadius: "0.375rem", // Bordes redondeados
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor:"rgba(176, 165, 165, 0.4)",
              zIndex:100,
            }),
            menuList:(provided) =>({
              ...provided,
              maxHeight:"200px",
              overflowY:"auto"
            }),
            option: (provided, { isFocused, isSelected }) => ({
              ...provided,
              color: "white", // Color del texto de las opciones
              backgroundColor: isSelected
                ? "rgba(0, 0, 0, 0.8)" // Color cuando está seleccionado
                : isFocused
                ? "rgba(100, 100, 100, 0.5)" // Color cuando está enfocado
                : "rgba(0, 0, 0, 0.5)", // Fondo de las opciones
              padding: "10px 15px", // Espaciado dentro de las opciones
            }),
          }}
          
        />



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