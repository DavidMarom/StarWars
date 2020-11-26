import React, { useEffect, useState } from 'react';
import { movieService } from '../services/movieService';

export function MovieList() {

    const [films, setFilms] = useState('');

    useEffect(() => {
        movieService.getMovies()
            .then(res => setFilms(res.results));
        // .catch(err)
    }, []);

    // useEffect(() => {
    //     console.log('in useEffect: ', films);
    // }, [films]);


    return (
        <div>
            <h1>List</h1>
            {console.log(films)}
        </div>
    )
}