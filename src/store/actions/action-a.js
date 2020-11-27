import { filmsService } from '../../services/filmsService';



export function onGetFilms() {
    console.log('******action getFilms triggered');
    return async dispatch => {
        try {
            const films = await filmsService.getFilms();
            dispatch({ type: 'GET_FILMS', films })
        }
        catch (err) {
            console.log('Error loading films');
        }
    }
}