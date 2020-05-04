class Pokemon {
  constructor(name) {
    this.name = name;
    this.weaknesses = [];
  }

  setDescription(descr) {
    this.description = descr;
  }

  setCategory(category) {
    this.category = category;
  }

  addWeaknesses(weaknessesArr) {
    this.weaknesses.push(...weaknessesArr);
  }

  setGender(gender) {
    switch (gender) {
      case 0: {
        this.gender = 'M';
        break;
      }
      case 8: {
        this.gender = 'F';
        break;
      }
      case -1: {
        this.gender = '-';
        break;
      }
      default: {
        this.gender = 'M F';
        break;
      }
    }
  }

  setWeight(weight) {
    this.weight = `${Math.round((weight / 4.5359237) * 100) / 100} lbs`;
  }

  // pasar a pies y pulgadas
  setHeight(height) {
    const realFeet = ((height * 3.93700) / 12);
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    this.height = `${feet}' ${(`0${inches}`).substr(-2)}''`;
  }

  setTypes(types) {
    this.types = types.map((x) => x.type.name);
  }

  setAbilities(abilities) {
    this.abilities = abilities.map((x) => x.ability.name);
  }
}

export default Pokemon;
