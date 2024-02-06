import { useQuery } from "@tanstack/react-query";


export default function useFetchPokemon(name : string){
    // const getPokemon = async (queryKey) => {
    //     const [_key, name] = queryKey;
    //     console.log(name);
    //     return (await fetch(;
    // }
    return useQuery({
        queryKey:[`pokemon`],
        queryFn : async ()=>{
           return (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json()
        },

    });

}