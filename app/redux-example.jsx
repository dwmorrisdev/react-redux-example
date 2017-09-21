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
var store = redux.createStore(reducer, redux.compose(
  //debugger for redux as chrome extention
  window.devToolsExtention ? window.devToolsExtention() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is: ', state.name);
  document.getElementById('name').innerHTML = state.name;
});
// unsubscribe();

console.log( 'currentState: ', store.getState() );

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dustin'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kriston'
});
