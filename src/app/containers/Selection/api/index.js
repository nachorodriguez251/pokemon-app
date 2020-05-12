import axios from 'axios';
import PokemonDetails from '../../Modal/models/pokemonDetails';
import PokemonList from '../components/SearchItem/models/pokemonList';


export async function fetchPokemonDetailsFromApi(id) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const fetchedPokemon = res.data;
  const toReturn = new PokemonDetails(fetchedPokemon.name);

  toReturn.setHeight(fetchedPokemon.height);
  toReturn.setWeight(fetchedPokemon.weight);
  toReturn.setTypes(fetchedPokemon.types);
  toReturn.setAbilities(fetchedPokemon.abilities);

  const specie = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

  toReturn.setGender(specie.data.gender_rate);

  /*
    promise all
    // const typesUrl = [];
    // for (let i = 0; i < fetchedPokemon.types.length; i++) {
    //   typesUrl.push(fetchedPokemon.types[i].type.url);
    // }

    // const promise1 = await axios.get(typesUrl[0]);
    // const promise2 = await axios.get(typesUrl[1]);

    // console.log(promise1);
    // console.log(promise2);
  */

  for (let i = 0; i < fetchedPokemon.types.length; i++) {
    const typeUrl = await axios.get(fetchedPokemon.types[i].type.url);
    const doubleDamageFrom = typeUrl.data.damage_relations.double_damage_from.map((x) => x.name);
    toReturn.addWeaknesses(doubleDamageFrom);
  }

  let j = 0;
  while (specie.data.flavor_text_entries[j].language.name !== 'en') j++;
  toReturn.setDescription(specie.data.flavor_text_entries[j].flavor_text);

  j = 0;
  while (specie.data.genera[j].language.name !== 'en') j++;
  toReturn.setCategory(specie.data.genera[j].genus.replace('Pokémon', ''));

  return toReturn;
}

export async function fetchPokemonListFromApi(pageNo, ppp) {
  const pokemonList = [];
  let pokemonItem;
  let menorA152 = true;
  const urlList = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=${ppp}&offset=${(pageNo - 1) * ppp}`);

  const fetchedList = urlList.data.results;

  // fetchedList.forEach(async (pokemon) => {
  //   const pokemonDataFromApi = await axios.get(pokemon.url);
  //   const pokemonData = pokemonDataFromApi.data;
  //   pokemonItem = new PokemonList(pokemonData.name, pokemonData.id, pokemonData.types);
  //   pokemonList.push(pokemonItem);
  // });

  for (let i = 0; (menorA152 && i < fetchedList.length); i++) {
    const pokemonDataFromApi = await axios.get(fetchedList[i].url);
    const pokemonData = pokemonDataFromApi.data;
    menorA152 = pokemonData.id < 152;
    if (menorA152) {
      pokemonItem = new PokemonList(pokemonData.name, pokemonData.id, pokemonData.types);

      const specie = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`);
      let j = 0;
      while (specie.data.flavor_text_entries[j].language.name !== 'en') j++;
      pokemonItem.setDescription(specie.data.flavor_text_entries[j].flavor_text);
    }


    pokemonList.push(pokemonItem);
  }

  return pokemonList;
}

export async function fetchFiletedList(name, type1, type2) {
  let pokemonList = [];
  let menorA152 = true;
  let pokemonItem;
  let urlList;
  let fetchedList;
  let filteredList;
  if (name) {
    urlList = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
    fetchedList = urlList.data.results;
    filteredList = fetchedList.filter((pokemon) => pokemon.name.startsWith(name));
    for (let i = 0; i < filteredList.length; i++) {
      const pokemonDataFromApi = await axios.get(filteredList[i].url);
      const pokemonData = pokemonDataFromApi.data;

      pokemonItem = new PokemonList(pokemonData.name, pokemonData.id, pokemonData.types);
      const specie = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`);

      let j = 0;
      while (specie.data.flavor_text_entries[j].language.name !== 'en') j++;
      pokemonItem.setDescription(specie.data.flavor_text_entries[j].flavor_text);
      pokemonList.push(pokemonItem);
    }
  }
  if (type1) {
    if (!urlList) {
      urlList = await axios.get(`https://pokeapi.co/api/v2/type/${type1}`);
      fetchedList = urlList.data.pokemon;

      for (let i = 0; (menorA152 && i < fetchedList.length); i++) {
        const pokemonDataFromApi = await axios.get(fetchedList[i].pokemon.url);
        const pokemonData = pokemonDataFromApi.data;
        menorA152 = pokemonData.id < 152;
        if (menorA152) {
          pokemonItem = new PokemonList(pokemonData.name, pokemonData.id, pokemonData.types);
          const specie = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`);
          let j = 0;
          while (specie.data.flavor_text_entries[j].language.name !== 'en') j++;
          pokemonItem.setDescription(specie.data.flavor_text_entries[j].flavor_text);

          pokemonList.push(pokemonItem);
        }
      }
    } else {
      // ya se hizo la llamada a la api antes, filtro por lista local
      pokemonList = pokemonList.filter((pokemon) => pokemon.types.indexOf(type1) !== -1);
    }
  }
  if (type2) {
    if (!urlList) {
      urlList = await axios.get(`https://pokeapi.co/api/v2/type/${type2}`);
      fetchedList = urlList.data.pokemon;

      for (let i = 0; (menorA152 && i < fetchedList.length); i++) {
        const pokemonDataFromApi = await axios.get(fetchedList[i].pokemon.url);
        const pokemonData = pokemonDataFromApi.data;
        menorA152 = pokemonData.id < 152;
        if (menorA152) {
          pokemonItem = new PokemonList(pokemonData.name, pokemonData.id, pokemonData.types);
          const specie = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`);
          let j = 0;
          while (specie.data.flavor_text_entries[j].language.name !== 'en') j++;
          pokemonItem.setDescription(specie.data.flavor_text_entries[j].flavor_text);

          pokemonList.push(pokemonItem);
        }
      }
    } else {
      // ya se hizo la llamada a la api antes, filtro por lista local
      pokemonList = pokemonList.filter((pokemon) => pokemon.types.indexOf(type2) !== -1);
    }
  }
  return pokemonList;
}
