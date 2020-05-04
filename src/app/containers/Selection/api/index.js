import axios from 'axios';
import Pokemon from '../../Modal/models/pokemon';
import { fetchDetailsSuccess, fetchDetailsRequest } from '../actions';


async function fetchData(id, dispatch) {

  dispatch(fetchDetailsRequest());
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const fetchedPokemon = res.data;
  const toReturn = new Pokemon(fetchedPokemon.name);

  toReturn.setHeight(fetchedPokemon.height);
  toReturn.setWeight(fetchedPokemon.weight);
  toReturn.setTypes(fetchedPokemon.types);
  toReturn.setAbilities(fetchedPokemon.abilities);

  const specie = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

  toReturn.setGender(specie.data.gender_rate);

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


  dispatch(fetchDetailsSuccess(toReturn));
  return res.name;
}

export default fetchData;
