"use client"
//Contexts
import { usePokemon } from "@/src/context/PokemonContext";
//Vendors
import Image from "next/image";
//Loaders Library
import { PropagateLoader } from "react-spinners";
//Styles
import "./card.css"

const HomeView: React.FC = () => {
  const { pokemons, loading, error } = usePokemon();


  const getTypeColor = (type: string) => {
    switch (type) {
      case "grass":
        return "text-green-300"
      case 'water':
        return 'text-blue-300';
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

          <ul className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center 
          bg-blue-900 bg-opacity-65 md:mt-[134px] md:w-[95%] mx-auto rounded-xl sm:gap-9 sm:w-[100%]
           mb-6 mt-20
          ">
            {pokemons.map((pokemon, index) =>
              <li key={index} className="space-y-3 bg-white h-auto w-72 flex flex-col justify-center items-center
              hover:bg-opacity-55 cursor-pointer  my-5 hover:saturate-200 pokemon-card border-gold 
              ">
              
                <Image src={pokemon.image} alt={pokemon.name} height={100} width={145} className="w-auto h-auto" />

                <strong> <h1 className="font-mono">Name: <span className="text-yellow-300">{pokemon.name.toLocaleUpperCase()}</span></h1></strong>

                <h2>
                  <strong className="text-black font-mono">Types: </strong>
                  {pokemon.types.map((type, typeIndex) =>
                    <span key={type.type.name} className={`${getTypeColor(type.type.name)} font-mono`}>
                      {type.type.name}
                      {typeIndex < pokemon.types.length - 1 && ', '}
                    </span>
                  )}
                </h2>

                <h2 className="flex flex-wrap justify-center">
                  <strong className="text-black font-mono">Abilities: </strong>
                  {pokemon.abilities.map((abilitie, abilitieIndex) =>
                    <span key={abilitie.ability.name} className="font-mono text-white">
                      {abilitie.ability.name}
                      {abilitieIndex < pokemon.abilities.length - 1 && ', '}
                    </span>
                  )}
                </h2>

              </li>
            )}
          </ul>
        )
      }

    </div>
  )
}

export default HomeView;