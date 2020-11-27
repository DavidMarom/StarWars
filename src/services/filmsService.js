import { httpService } from './httpService'

function getFilms() {
    return httpService.get(`films/`)
}

export const filmsService = {
    getFilms
};