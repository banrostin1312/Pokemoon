//Vendors
import { createContext, ReactNode, useContext } from "react";
//Types
import IPokemon from "../interfaces/IPokemon";

interface PokemonContextProps {
    pokemons:IPokemon[],
}

const PokemonContext = createContext<PokemonContextProps | null >(null);

export const PokemonProvider:React.FC<{children:ReactNode}> = ({children}) => {

    return (
      <PokemonContext.Provider value={{pokemons}}>
        {children}
      </PokemonContext.Provider>
    )
}

export const usePokemon = () => {
    const context = useContext(PokemonContext);

    if(!context) {
        throw new Error("usePokemon must be used whitin a PokemonProvider")
    }
    return context;
}
