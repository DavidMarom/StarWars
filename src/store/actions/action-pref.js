export function toggleFavFilm( number ) {
    return dispatch => {
        dispatch({ type: 'TOGGLE_FILM', number })
    }
}

export function loadStorage() {
    return dispatch => {
        dispatch({ type: 'LOAD_STORAGE' })
    }
}