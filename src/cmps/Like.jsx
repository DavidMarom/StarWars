import React from 'react'
import { connect } from 'react-redux';
import { toggleFavFilm } from '../store/actions/action-pref';


export const _Like = ({idx,fav}) => {
    return (
        <div>
            <p>{idx}</p>
            {console.log(fav)}
        </div>
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