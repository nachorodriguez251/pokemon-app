import React from 'react';
import Step from './components/Step';
import './styles.css';

function index() {
  return (
    <div className="colSteps">
      <div className="span_1_of_3">
        <Step
          imgSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png"
          imgAlt="Step1"
          title="Step 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="span_1_of_3">
        <Step
          imgSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png"
          imgAlt="Step2"
          title="Step 2"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="span_1_of_3">
        <Step
          imgSource="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"
          imgAlt="Step3"
          title="Step 3"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}

export default index;
