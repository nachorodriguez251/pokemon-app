const initialState = {
  pokemonList: [
    {
      name: 'Bulbasaur',
      number: '001',
      description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun&apos;s rays, the seed grows progressively larger.',
      type1: 'Grass',
      type2: 'Poison',
    },
    {
      name: 'Ivysaur',
      number: '002',
      description: 'This Pokémon has a bulb on its back and, to support its weight, it has thick and strong legs and a trunk. If you start spending more time in the sun, it is because the bulb is about to become a big flower.',
      type1: 'Grass',
      type2: 'Poison',
    },
    {
      name: 'Venusaur',
      number: '003',
      description: 'Venusaur has a huge flower on its back, which seems to take on very bright colors if it is well nourished and gives it plenty of sun. The delicate aroma of the flower has a relaxing effect on people&apos;s spirits.',
      type1: 'Grass',
      type2: 'Poison',
    },
    {
      name: 'Charmander',
      number: '004',
      description: 'The flame at the tip of his tail burns according to his feelings. It flares slightly when cheerful and burns vigorously when angry.',
      type1: 'Fire',
    },
    {
      name: 'Charmeleon',
      number: '005',
      description: 'Charmeleon has no qualms about taking down his rival using his sharp claws. If his enemy is strong, he becomes aggressive, and the flame at the end of his tail begins to burn more intensely, turning bluish.',
      type1: 'Fire',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducer;
