"use client"
//Contexts
import { usePokemon } from "@/src/context/PokemonContext";
//Vendors
import Image from "next/image";


const HomeView: React.FC = () => {
  const { pokemons } = usePokemon();

  return (
    <div>
      <title>Home</title>
      <ul className="grid md:grid-cols-3 p-6 space-y-3 m-6">
        {pokemons.map((pokemon, index) =>
          <li key={index} className="space-y-3">
            <h1>Name: {pokemon.name}</h1>
            <Image src={pokemon.image} alt={pokemon.name} height={50} width={50}/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default HomeView;