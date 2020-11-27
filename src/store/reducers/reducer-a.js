const initialState = {
    films: []
}

const reducer_A = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_FILMS':
            return { ...state, films: action.films }

        default:
            return state
    }
}

export default reducer_A;