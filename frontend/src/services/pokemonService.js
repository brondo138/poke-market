const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (limit = 12) => {
    try {
        const randomIds = getRandomPokemonIds(limit, 151);

        const pokemonDetails = await Promise.all(
        randomIds.map(async (id) => {
            const response = await fetch(`${API_URL}/${id}`);

            if (!response.ok) {
            throw new Error(`Error al obtener el Pokémon con ID ${id}`);
            }

            const detail = await response.json();

            return {
            id: detail.id,
            name: detail.name,
            image: detail.sprites.other["official-artwork"].front_default,
            types: detail.types.map((typeInfo) => typeInfo.type.name),
            price: calculatePrice(detail.id),
            purchased: false,
            };
        })
        );

        return pokemonDetails;
    } catch (error) {
        console.error(error);
        throw error;
    }
    };

    const getRandomPokemonIds = (limit, maxId) => {
    const ids = new Set();

    while (ids.size < limit) {
        const randomId = Math.floor(Math.random() * maxId) + 1;
        ids.add(randomId);
    }

    return Array.from(ids);
};

const calculatePrice = (id) => {
  return (id * 1.25 + 4.99).toFixed(2);
};