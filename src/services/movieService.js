import httpService from './httpService'

function getMovies() {
    // httpService.get(`films/`).then((res)=>{ return res })
    return httpService.get(`films/`);
}

function getMovie(filmId) {
    return httpService.get(`films/:${filmId}/`);
}

export const movieService = {
    getMovies,
    getMovie
};