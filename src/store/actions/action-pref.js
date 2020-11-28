export function toggleFavFilm( number ) {
    return dispatch => {
        dispatch({ type: 'TOGGLE_FILM', number })


    }
}