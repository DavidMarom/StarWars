import React, { useEffect } from 'react';
// import { FilmStrip } from './FilmStrip';
import { connect } from 'react-redux';

export function _FilmsList(props) {
    const aaa = props.films;

    if (aaa) {
        return (
            <div>
                <h1>List</h1>
                {console.log('FilmList', aaa)}
                {/* {console.log(props)} */}
                {/* {aaa.map(
                    film => <FilmStrip key={film.episode_id} title={film.title} />
                )} */}

            </div>

        )
    }
    else return (
        <h1>LOADING</h1>
    )
};

const mapStateToProps = state => {
    return {
        films: state.reducerA.films
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onGetFilms: () => dispatch({ type: 'GET_FILMS' })
//     }
// }

export const FilmsList = connect(mapStateToProps, null)(_FilmsList);