import React, { useEffect } from 'react';
import TopBar from '../cmps/TopBar';
import { FilmsList } from '../cmps/FilmsList';
import { connect } from 'react-redux';


export function _Home(props) {

    useEffect(() => {
        console.log('****** Home useEffect');
        props.onGetFilms();
        console.log(props);
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
        return (<h1>LOADING</h1>);
    }
}


const mapStateToProps = state => {
    return {
        films: state.reducerA.films
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetFilms: () => dispatch({ type: 'GET_FILMS' })

    }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);