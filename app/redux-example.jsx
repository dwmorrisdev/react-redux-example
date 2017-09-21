var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Anonymous'};
  console.log('New action: ', action);
  switch (action.type){
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };
      case 'ADD_HOBBY':
        return {
          ...state,
          hobbies: [
            ...state.hobbies,
            {
              id: nextHobbyId++,
              hobby: action.hobby
            }
          ]
        };
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter( (hobby) => hobby.id !== action.id )
        };
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter( (movie) => movie.id !== action.id )
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

  console.log('new state:', store.getState() );
});
// unsubscribe();

console.log( 'currentState: ', store.getState() );


// add/update calls 
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Dustin'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Guitar'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Kriston'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Iron Man',
  genre: 'Superhero'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'IT',
  genre: 'Horror'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Something About Mary',
  genre: 'Comedy'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Coding'
});

// remove calls
store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 3
});
