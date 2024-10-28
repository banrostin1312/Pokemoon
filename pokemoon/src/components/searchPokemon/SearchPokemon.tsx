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
              maxHeight: "200px", // Altura máxima del menú desplegable
              overflowY: "auto", // Habilitar scroll
              backgroundColor:"rgba(176, 165, 165, 0.4)"
            }),
            option: (provided) => ({
              ...provided,
              color: "white", // Color del texto de las opciones
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo de las opciones
            }),
          }}
          // Propiedades obligatorias
          inputValue={selectedCategory ? selectedCategory.label:""} // Valor de entrada
          onInputChange={(inputValue) => { }} // Maneja cambios en el valor de entrada
          onMenuOpen={() => { }} // Maneja cuando el menú se abre
          onMenuClose={() => { }} // Maneja cuando el menú se cierra
          isClearable={true} // Permite limpiar la selección
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