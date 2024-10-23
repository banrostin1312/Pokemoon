"use client"
//Vendors
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import axios from "axios";
//Types
import IPokemon from "../interfaces/IPokemon";

interface PokemonContextProps {
    pokemons: IPokemon[],
}

const PokemonContext = createContext<PokemonContextProps | null>(null);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [pokemons, setPokemons] = useState<IPokemon[]>([]);


    useEffect(() => {
        const fetchAllPokemons = async () => {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            const data = await response.data;
            setPokemons(data.results);
        }
        fetchAllPokemons();
    }, []);

    return (
        <PokemonContext.Provider value={{ pokemons }}>
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
