var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous'
};

var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Anonymous'};
  console.log('New action: ', action);
  switch (action.type){
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };
      default:
        return state;
  }
};
var store = redux.createStore(reducer);

console.log('currentState: ', store.getState());

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dustin'
});

console.log('name should be Dustin', store.getState());
