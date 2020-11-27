import React, { useEffect } from 'react';
import TopBar from '../cmps/TopBar';
import { FilmsList } from '../cmps/FilmsList';
import { connect } from 'react-redux';
import { onGetFilms } from '../store/actions/action-a';

export function _Home(props) {
    useEffect(() => {
        props.onGetFilms();
    },[]);


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
        return (<h1>LOADING</h1>);
    }
}


const mapStateToProps = state => {
    return {
        films: state.reducerA.films
    };
};

const mapDispatchToProps = {
    onGetFilms
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);