"use client"
//Contexts
import { usePokemon } from "@/src/context/PokemonContext";
//Vendors
import Image from "next/image";
import { useState } from "react";
//Loaders Library
import { PropagateLoader } from "react-spinners";
//Styles
import "./card.css"

const PokeDexView: React.FC = () => {
  const { pokemons, loading, error } = usePokemon();
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 51;

  const indexOfLastPokemon = currentPage * pokemonsPerPage;

  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber: number) =>{
    setCurrentPage(pageNumber)
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  };

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "grass":
        return "text-green-300"
      case 'water':
        return 'text-blue-500';
      case 'fire':
        return 'text-red-500';
      case 'bug':
        return 'text-green-700';
      case 'normal':
        return 'text-gray-200';
      case 'poison':
        return 'text-purple-800';
      case 'electric':
        return 'text-yellow-500';
      case 'ground':
        return 'text-brown-500';
      case 'fairy':
        return 'text-pink-400';
      case 'fighting':
        return 'text-orange-600';
      case 'rock':
        return 'text-amber-800';
      case 'psychic':
        return 'text-violet-600'
      case 'flying':
        return 'text-blue-300'
      default:
        return "text-white"
    }
  }




  return (
    <div>
      <title>Home</title>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PropagateLoader />
        </div>
      ) : error ? (<p>{error}</p>)
        : (
          <>
          
          <ul className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center 
           md:mt-[134px] md:w-[95%] mx-auto rounded-xl sm:gap-9 sm:w-[100%]
           mb-6 mt-20
          ">
            {currentPokemons.map((pokemon, index) =>
              <li key={index} className="space-y-3 bg-white h-auto w-72 flex flex-col justify-center items-center
              hover:bg-opacity-55 cursor-pointer  my-5 hover:saturate-200 pokemon-card border-gold 
              ">

                <Image src={pokemon.image} alt={pokemon.name} height={100} width={145} className="w-auto h-auto" />

                <strong> <h1 className="font-mono">🏷️Name: <span className="text-yellow-100">{pokemon.name.toLocaleUpperCase()}</span></h1></strong>

                <h2>
                  <strong className="text-black font-mono">📊Types: </strong>
                  {pokemon.types.map((type, typeIndex) =>
                    <span key={type.type.name} className={`${getTypeColor(type.type.name)} font-mono`}>
                      {type.type.name}
                      {typeIndex < pokemon.types.length - 1 && ', '}
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