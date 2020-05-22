// eslint-disable-next-line import/prefer-default-export
export const toggleModal = (payload) => ({
  type: 'TOGGLE_MODAL',
  payload,
});

export const saveNewMovie = (payload) => ({
  type: 'SAVE_NEW_MOVIE',
  payload,
});

export const deleteMovie = (payload) => ({
  type: 'DELETE_MOVIE',
  payload,
});

export const updateCurrentMovie = (payload) => ({
  type: 'UPDATE_CURRENT_MOVIE',
  payload,
});

export const updateMovie = (payload) => ({
  type: 'UPDATE_MOVIE',
  payload,
});

export const refreshCurrentMovie = (payload) => ({
  type: 'REFRESH_CURRENT_MOVIE',
  payload,
});
