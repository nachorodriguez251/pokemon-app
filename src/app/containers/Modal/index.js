import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectForBattle, fetchDetailsSuccess } from '../Selection/actions';
import Button from '../../components/Button';
import NoMatch from '../NoMatch';
import './styles.css';

function Modal() {
  const { id } = useParams();
  const number = (`000${id}`).substr(-3);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.details.name);
  const description = useSelector((state) => state.details.description);
  const height = useSelector((state) => state.details.height);
  const weight = useSelector((state) => state.details.weight);
  const types = useSelector((state) => state.details.types);
  const abilities = useSelector((state) => state.details.abilities);
  const weaknesses = useSelector((state) => state.details.weaknesses);
  const category = useSelector((state) => state.details.category);
  const gender = useSelector((state) => state.details.gender);
  const battle1 = useSelector((state) => state.battle1);
  const battle2 = useSelector((state) => state.battle2);

  const loadingDetails = useSelector((state) => state.loadingDetails);

  // ubicar mejor esta lógica!!
  if (isNaN(id) || id < 1 || id > 151) return <NoMatch />;

  return (
    <div className="back-container">
      { loadingDetails
        ? (
          <div className="back-container-loading">
            <div className="modal">
              <div className="modal-loading-container">
                <h1 className="modal-loading-title">Loading...</h1>
              </div>
            </div>
          </div>
        )
        : (
          <div className="modal">
            <div className="modal-left-container">
              <div className="modal-presentation">
                <h1 className="modal-title">{name}</h1>
                <h2 className="modal-number">
                  #
                  {number}
                </h2>
                <p className="modal-description">{description}</p>
              </div>
              <div className="modal-details">
                <div className="modal-atributes">
                  <div className="modal-attributes-left">
                    <h4 className="modal-attribute-title">
                      Height
                    </h4>
                    <h3 className="modal-attribute-value">
                      {height}
                    </h3>
                    <h4 className="modal-attribute-title">
                      Weight
                    </h4>
                    <h3 className="modal-attribute-value modal-attribute-weight">
                      {weight}
                    </h3>
                    <h4 className="modal-attribute-title">
                      Gender
                    </h4>
                    <h3 className="modal-attribute-value">
                      {gender}
                    </h3>
                  </div>
                  <div className="modal-attributes-right">
                    <h4 className="modal-attribute-title">
                      Category
                    </h4>
                    <h3 className="modal-attribute-value">
                      {category}
                    </h3>
                    <h4 className="modal-attribute-title">
                      Abilities
                    </h4>
                    { abilities.map((x) => (
                      <h3
                        className="modal-attribute-value"
                        key={x}
                      >
                        { x }
                      </h3>
                    )) }

                  </div>
                </div>
                <div className="modal-types-weaknesses">
                  <h4 className="modal-types-title">
                    Types
                  </h4>
                  <div className="modal-types">
                    { types.map((x) => (
                      <span
                        className={x}
                        key={x}
                      >
                        { x }
                      </span>
                    )) }
                  </div>
                  <h4 className="modal-weaknesses-title">
                    Weaknesses
                  </h4>
                  <div className="modal-weaknesses">
                    { weaknesses.map((x) => (
                      <span
                        className={x}
                        key={x}
                      >
                        { x }
                      </span>
                    )) }
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-right-container">
              <Link
                className="modal-btn-close"
                to="/selection"
                onClick={() => dispatch(fetchDetailsSuccess(0))}
              >
                Close
                <ion-icon
                  name="close"
                  size="large"
                />
              </Link>
              <img
                className="modal-image"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`}
                alt="001"
              />
              <Link
                to="/selection"
                onClick={() => dispatch(selectForBattle(number, name))}
              >
                <Button
                  styleName="modal-select"
                  text="Select for Battle"
                  disable={battle1 && battle2}
                />
              </Link>
            </div>
          </div>
        )}
    </div>
  );
}

export default Modal;
