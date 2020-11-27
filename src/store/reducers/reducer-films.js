const initialState = {
    films: null
}

const reducer_films = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_FILMS':
            return { ...state, films: action.films.results }

        default:
            return state
    }
}

export default reducer_films;