import React, { useEffect } from 'react';
import TopBar from '../cmps/TopBar';
import { FilmsList } from '../cmps/FilmsList';
import { connect } from 'react-redux';
import { onGetFilms } from '../store/actions/action-films';
import { toggleFavFilm, loadStorage } from '../store/actions/action-pref';

export function _Home(props) {
    useEffect(() => {
        props.onGetFilms();
        props.loadStorage();
    }, []);

    if (props.films) {
        return (
            <div className="cb">
                <div className="outter-container">
                    <div className="inner-container">
                        <TopBar />
                        <FilmsList />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (<h1>Loading...</h1>);
    }
}

const mapStateToProps = state => {
    return {
        films: state.reducer_films.films,
        fav: state.reducer_pref.fav
    };
};

const mapDispatchToProps = {
    onGetFilms,
    toggleFavFilm,
    loadStorage
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);