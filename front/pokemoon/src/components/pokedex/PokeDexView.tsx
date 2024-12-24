"use client"
//Contexts
import { usePokemon } from "@/src/context/PokemonContext";
//Vendors
import Image from "next/image";
import { useState, useEffect } from "react";
//Loaders Library
import { PropagateLoader } from "react-spinners";
//Styles
import "./card.css"
//Components
import SearchPokemon from "../searchPokemon/SearchPokemon";



const PokeDexView: React.FC = () => {
  const { pokemons, loading, error } = usePokemon();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  const pokemonsPerPage = 51;

  const indexOfLastPokemon = currentPage * pokemonsPerPage;

  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

  const handleSearch = (term: string) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPokemons(filtered);
    setCurrentPage(1);
  };

  const handleCategorySelected = (category: string) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.types.some(type => type.type.name === category)
    );
    setFilteredPokemons(filtered);
    setCurrentPage(1);
  }

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);


  const getTypeColor = (type: string) => {
    switch (type) {
      case "grass":
        return "bg-green-300"
      case 'water':
        return 'bg-blue-500';
      case 'fire':
        return 'bg-red-500';
      case 'bug':
        return 'bg-green-700';
      case 'normal':
        return 'bg-gray-200';
      case 'poison':
        return 'bg-purple-800';
      case 'electric':
        return 'bg-yellow-500';
      case 'ground':
        return 'bg-stone-700';
      case 'fairy':
        return 'bg-pink-400';
      case 'fighting':
        return 'bg-orange-600';
      case 'rock':
        return 'bg-amber-800';
      case 'psychic':
        return 'bg-violet-600'
      case 'flying':
        return 'bg-blue-300'
      case 'dragon':
        return 'bg-red-700'
      case 'steel':
        return 'bg-zinc-300'
        case 'ice':
        return 'bg-cyan-200'
        case 'dark':
          return 'bg-slate-950'
      default:
        return "bg-white"
    }
  }




  return (
    <div>
      <title>PokeDex</title>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PropagateLoader />
        </div>
      ) : error ? (<p>{error}</p>)
        : (
          <>
            <SearchPokemon onSearch={handleSearch} onCategorySelect={handleCategorySelected} />
            <ul className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center 
            md:w-[95%] mx-auto rounded-xl sm:gap-9 sm:w-[100%] mt-[-100px]
          
          ">
              {currentPokemons.map((pokemon, index) =>
                <li key={index} className="space-y-3 bg-white h-auto w-72 flex flex-col justify-center items-center
              hover:bg-opacity-55 my-5 hover:saturate-200 pokemon-card border-gold 
              ">
                  <span className="absolute z-0 text-white text-[100px] opacity-20">{pokemon.id}</span>
                  <Image src={pokemon.image} alt={pokemon.name} height={100} width={145} className="w-auto h-auto" />

                  <strong> <h1 className="font-mono">🏷️Name : <span className="text-yellow-100">{pokemon.name.toLocaleUpperCase()}</span></h1></strong>

                  <h2>
                    <strong className="text-black font-mono">📊Types: </strong>
                    {pokemon.types.map((type) =>
                      <span key={type.type.name} className={`${getTypeColor(type.type.name)} font-mono bg-invicible rounded mx-1 text-white bg-opacity-75`}>
                        {type.type.name}
                      </span>
                    )}
                  </h2>

                  <h2 className="flex flex-wrap justify-center">
                    <strong className="text-black font-mono">🎯Abilities: </strong>
                    {pokemon.abilities.map((abilitie, abilitieIndex) =>
                      <span key={abilitie.ability.name} className="font-mono text-white">
                        {abilitie.ability.name}
                        {abilitieIndex < pokemon.abilities.length - 1 && ', '}
                      </span>
                    )}
                  </h2>
                  <strong className="text-black font-mono">📈Stats:</strong>

                  <div className="grid grid-cols-2 justify-items-center items-center" key={index}>
                    {pokemon.stats.
                      filter((stat) => stat.stat.name === "hp" || stat.stat.name === "attack" || stat.stat.name === "speed" || stat.stat.name === "defense").
                      map((stat) =>
                        <span className=" font-mono" key={stat.stat.name}>
                          {stat.stat.name === "hp" ? "❤️" : stat.stat.name === "attack" ? "🗡️" :
                            stat.stat.name === "defense" ? "🛡️" : "⚡"
                          }
                          <strong>{stat.stat.name.toLocaleUpperCase()}</strong>:<span className="text-white">{stat.base_stat}</span>
                        </span>
                      )
                    }
                  </div>

                  <div>
                    <strong className="text-black font-mono">⭐IsLegendary</strong>:
                    {pokemon.isLegendary === true ? "✅" : "❌"}
                  </div>
                </li>

              )}


            </ul>
            <div className="bg-slate-900 w-full h-[2px]"></div>
            <div className="flex justify-center items-center my-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mx-2 px-3 py-1 rounded text-2xl ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 hover:bg-blue-300 text-black'}`}
              >
                🢘
              </button>

              <span className="mx-4 font-bold text-2xl text-white">
                {currentPage}
              </span>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`mx-2 px-3 py-1 rounded text-2xl ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 hover:bg-blue-300 text-black'}`}
              >
                🢚
              </button>
            </div>
          </>
        )
      }

    </div>
  )
}

export default PokeDexView;