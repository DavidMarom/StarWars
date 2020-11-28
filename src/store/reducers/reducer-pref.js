const initialState = {
    fav: [false, false, false, false, false, false]
}

const reducer_pref = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_FAV':
            return state
        case 'TOGGLE_FILM':
            state.fav[action.number]=!state.fav[action.number];
            return state
        default:
            return state
    }
}

export default reducer_pref;