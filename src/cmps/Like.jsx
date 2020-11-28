import React, { useState } from 'react'
import { connect } from 'react-redux';
import { toggleFavFilm } from '../store/actions/action-pref';

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => ++value);
}

export const _Like = ({ idx, fav, toggleFavFilm }) => {
    const forceUpdate = useForceUpdate();
    return (
        <div>
            <div onClick={() => { toggleFavFilm(idx); forceUpdate(); }}>
                {(fav[idx] ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>)}
            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        fav: state.reducer_pref.fav
    };
};

const mapDispatchToProps = {
    toggleFavFilm
}

export const Like = connect(mapStateToProps, mapDispatchToProps)(_Like);