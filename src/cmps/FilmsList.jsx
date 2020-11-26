import React, { useEffect, useState } from 'react';
import { filmsService } from '../services/filmsService';
import { FilmStrip } from './FilmStrip';

export function FilmsList() {

    const [films, setFilms] = useState('');

    useEffect(() => {
        filmsService.getFilms()
            .then(res => setFilms(res.results))
            .catch(err => err)


    }, []);

    if (films) {
        return (
            <div>
                <h1>List</h1>
                {console.log(films)}

                {films.map(film => <FilmStrip key={film.episode_id} title={film.title} />)}


            </div>

        )
    }
    else return (
        <h1>LOADING</h1>
    )
}