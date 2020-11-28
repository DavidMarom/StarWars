import { storageService } from '../../services/storageService';

const initialState = {
    fav: [false, false, false, false, false, false]
}

const reducer_pref = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_FAV':
            return state
        case 'TOGGLE_FILM':
            state.fav[action.number] = !state.fav[action.number];
            storageService.saveToStorage('likes', state.fav);
            return state
        case 'LOAD_STORAGE':
            if (storageService.loadFromStorage('likes')) { state.fav = storageService.loadFromStorage('likes') }
            else { storageService.saveToStorage('likes', [false, false, false, false, false, false]) };
            return state
        default:
            return state
    }
}

export default reducer_pref;