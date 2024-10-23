"use client"
//Vendors
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import axios from "axios";
//Types
import IPokemon from "../interfaces/IPokemon";

interface PokemonContextProps {
    pokemons: IPokemon[],
    error: string | null,
    loading:boolean,
}

const PokemonContext = createContext<PokemonContextProps | null>(null);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("fetching all pokemons.....");

        const fetchAllPokemons = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
                const data = await response.data.results;

                const pokemonsWhitImages = await Promise.all(
                    data.map(async (pokemon: IPokemon) => {
                        const pokemonDetailedResponse = await axios.get(pokemon.url);
                        return {
                            name: pokemonDetailedResponse.data.name,
                            url: pokemonDetailedResponse.data.url,
                            image: pokemonDetailedResponse.data.sprites.front_default,
                        }
                    })
                )
                setPokemons(pokemonsWhitImages);

            } catch (error) {
                console.error(error);
                setError("failed to fetch pokemons")
            } finally {
                setLoading(false);
            }

        }
        fetchAllPokemons();
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemons , error, loading}}>
            {children}
        </PokemonContext.Provider>
    )
}







export const usePokemon = () => {
    const context = useContext(PokemonContext);

    if (!context) {
        throw new Error("usePokemon must be used whitin a PokemonProvider")
    }
    return context;
}
