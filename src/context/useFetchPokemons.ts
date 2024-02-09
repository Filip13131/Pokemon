import { useInfiniteQuery } from "@tanstack/react-query";

export default function useFetchPokemons() {
    const getPokemons = async ({ pageParam }) => {
        return (await fetch(pageParam)).json();
      }
    
      return useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: getPokemons,
        initialPageParam: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`,
        getNextPageParam: (lastPage) => lastPage.next,
      })
}