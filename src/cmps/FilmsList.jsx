import React from 'react';
import { connect } from 'react-redux';
import { FilmStrip } from './FilmStrip';

export function _FilmsList({ films }) {
    if (films) {
        return (
            <div>
                <h1>List</h1>
                {films.map(film => <FilmStrip key={film.episode_id} title={film.title} />)}
            </div>
        )
    }
    else return (<h1>LOADING</h1>)
};

const mapStateToProps = state => {
    return {
        films: state.reducer_films.films
    };
};

export const FilmsList = connect(mapStateToProps, null)(_FilmsList);