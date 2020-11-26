import React from 'react';
import TopBar from '../cmps/TopBar';
import { MovieList } from '../cmps/MovieList';

export function Home(props) {
    return (
        <div className="cb">
            <div className="outter-container">
                <div className="inner-container">
                    <TopBar />
                    <MovieList />

                </div>
            </div>
        </div>
    )
}

