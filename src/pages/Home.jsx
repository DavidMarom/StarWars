import React from 'react';
import TopBar from '../cmps/TopBar';
import { FilmsList } from '../cmps/FilmsList';

export function Home(props) {
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

