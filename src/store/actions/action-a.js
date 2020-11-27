import { filmsService } from '../../services/filmsService';

export function onGetFilms() {
    return async dispatch => {
        try {
            const films = await filmsService.getFilms();
            dispatch({ type: 'GET_FILMS',  films })
        }
        catch (err) {
            console.log('Error loading films');
        }
    }
}