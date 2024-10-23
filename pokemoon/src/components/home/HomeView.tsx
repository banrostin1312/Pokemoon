"use client"
//Contexts
import { usePokemon } from "@/src/context/PokemonContext";
//Vendors
import Image from "next/image";
//Loaders Library
import { PropagateLoader } from "react-spinners";


const HomeView: React.FC = () => {
  const { pokemons, loading, error } = usePokemon();

  return (
    <div>
      <title>Home</title>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PropagateLoader/>
        </div>
      ) : error ? (<p>{error}</p>)
        : (
          <ul className="grid md:grid-cols-4 p-6 space-y-3 place-items-center ">
            {pokemons.map((pokemon, index) =>
              <li key={index} className="space-y-3">
                <h1>Name: {pokemon.name}</h1>
                <Image src={pokemon.image} alt={pokemon.name} height={100} width={100} />
              </li>
            )}
          </ul>
        ) 
      }

    </div>
  )
}

export default HomeView;