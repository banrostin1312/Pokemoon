"use client"
//Contexts
import { usePokemon } from "@/src/context/PokemonContext";
//Vendors
import Image from "next/image";
//Loaders Library
import { PropagateLoader } from "react-spinners";
//Helpers
import getTypeColor from "../../helpers/getTypeColor";


const HomeView: React.FC = () => {
  const { pokemons, loading, error } = usePokemon();

  


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
           mb-6 mt-[255px]
          ">
            {pokemons.map((pokemon, index) =>
              <li key={index} className="space-y-3 bg-white  hover:scale-110 bg-opacity-45 rounded-lg h-auto w-72 flex flex-col justify-center items-center
              hover:bg-opacity-55 cursor-pointer transition-transform duration-300 my-5
              ">
                <Image src={pokemon.image} alt={pokemon.name} height={100} width={145} className="w-auto h-auto"/>

               <strong> <h1 className="font-mono">Name: {pokemon.name.toLocaleUpperCase()}</h1></strong>

                <h2>
                  <strong className="text-black font-mono">Types: </strong>
                  {pokemon.types.map((type, typeIndex) =>
                    <span key={type.type.name} className={`${getTypeColor(type.type.name)} font-mono`}>
                      {type.type.name}
                      {typeIndex < pokemon.types.length - 1 && ', '}
                    </span>
                  )}
                </h2>

                <h2>
                  <strong className="text-black font-mono">Abilities: </strong>
                  {pokemon.abilities.map((abilitie,abilitieIndex)=>
                  <span key={abilitie.ability.name} className="font-mono">
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