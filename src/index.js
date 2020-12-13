import {createStore} from 'redux';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RST':
      return 0;
    default:
       return state;
  }
}

const store = createStore(reducer);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rst = () => ({type: 'RST'});

const state = document.getElementById('counter');

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('rst').addEventListener('click', () => {
  store.dispatch(rst());
});

const update = () => {
  state.textContent = store.getState();
}

store.subscribe(update);