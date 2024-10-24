//types
import IPokemonType from "./IPokemonType"
import IPokemonAbility from "./IPokemonAbility"

export default interface IPokemon {
name:string,
url:string
image:string,
types:IPokemonType[],
abilities:IPokemonAbility[]
}