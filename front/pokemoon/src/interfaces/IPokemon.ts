//types
import IPokemonType from "./IPokemonType"
import IPokemonAbility from "./IPokemonAbility"
import IPokemonStat from "./IPokemonStat"

export default interface IPokemon {
    id: number,
    name: string,
    url: string
    image: string,
    types: IPokemonType[],
    abilities: IPokemonAbility[],
    stats: IPokemonStat[],
    isLegendary: boolean
}