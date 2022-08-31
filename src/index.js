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
// TO SOLVE: add points to 'hp' AND remove points from 'magic' at the same time --> ? > const healingSpell = changeState('hp')(5)('magic')(-5);

// UI

$(document).ready(function () {
  const wizard1 = storeState(wizard);
  // $('#player-stats-hp').text(wizard1()10)
  $('#player-stats-hp').text(wizard1().hp);
  $('#player-stats-magic').text(wizard1().magic);

  $('#player-actions').click(function () {
    wizard1(blueFood);
    console.log(wizards[0]());
    $('#player-stats-hp').text(wizard1().hp);
    $('#player-stats-magic').text(wizard1().magic);
    $('#player-stats-water').text(wizard1().water);
    $('#player-stats-hp').text(wizard1().hp);
  });
});
