"use client"
import { usePokemon } from "@/src/context/PokemonContext";

const HomeView: React.FC = () => {
  const { pokemons } = usePokemon();

  return (
    <div>
      <title>Home</title>
      <ul>
        {pokemons.map((pokemon, index) =>
          <li key={index}>
            <h1>Name: {pokemon.name}</h1>
            <p>URL: {pokemon.url}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default HomeView;