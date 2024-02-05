import { useInfiniteQuery } from "@tanstack/react-query";

export default function useFetchPokemon() {
    const getPokemon = async ({ pageParam }) => {
        return (await fetch(pageParam)).json();
      }
    
      return useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemon,
        initialPageParam: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`,
        getNextPageParam: (lastPage) => lastPage.next,
      })
}