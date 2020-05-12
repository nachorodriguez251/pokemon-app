// pasar a funcion
class PokemonList {
  constructor(name, id, types) {
    this.name = name;
    this.id = id;
    this.types = types.map((x) => x.type.name);
  }

  setId(id) {
    this.id = id;
  }

  setDescription(id) {
    this.description = id;
  }

  setTypes(types) {
    this.types = types.map((x) => x.type.name);
  }
}

export default PokemonList;
