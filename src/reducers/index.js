const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modal: action.payload,
      };
    case 'SAVE_NEW_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload.movies],
        modal: action.payload.modal,
        lastId: state.lastId + 1,
      };
    case 'DELETE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((item) => item.id !== action.payload.id),
      };
    case 'UPDATE_CURRENT_MOVIE':
      return {
        ...state,
        curMovie: action.payload,
      };
    case 'UPDATE_MOVIE':
      return {
        ...state,
        movies: state.movies.map((item) => ((item.id === action.payload.movies.id) ? action.payload.movies : item)),
        modal: action.payload.modal,
      };
    case 'REFRESH_CURRENT_MOVIE':
      return {
        ...state,
        curMovie: action.payload.curMovie,
        modal: action.payload.modal,
      };
    default:
      return state;
  }
};

export default reducer;
