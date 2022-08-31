import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let wizard = { hp: 10, magic: 10 };

const storeState = initialValue => {
  let currentState = initialValue;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();
const stateControl2 = storeState();
const stateControl3 = storeState();

const changeState = prop => {
  return value => {
    return state => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

const poorlyCastMageLight = changeState('hp')(-5);
const poorlyCastFireball = changeState('hp')(-10);
const healingSpell = changeState('hp')(5);
// TO SOLVE: add points to 'hp' AND remove points from 'magic'
// const healingSpell = changeState('hp')(5)('magic')(-5);

// UI

$(document).ready(function () {
  let wizards = [];
  $('#player-choice-form').submit(function (event) {
    event.preventDefault();
    let playerChoice = $('input[type=radio][name=survey]:checked').val();
    console.log(playerChoice);
    $('#fighter-choice').text(playerChoice);

    const playerGenerator = () => {
      const wizard1 = storeState(wizard);
      wizards.push(wizard1);
      console.log(wizard1());
      $('#player-stats-hp').text(wizard1().hp);
      $('#player-stats-magic').text(wizard1().magic);
      $('#player-stats-water').text(wizard1().water);
      $('#player-stats-hp').text(wizard1().hp);
    };
    playerGenerator();
  });

  $('#player-actions').click(function () {
    wizards[0](blueFood);
    console.log(wizards[0]());
    $('#player-stats-hp').text(wizards[0]().hp);
    $('#player-stats-magic').text(wizards[0]().magic);
    $('#player-stats-water').text(wizards[0]().water);
    $('#player-stats-hp').text(wizards[0]().hp);
  });
});
