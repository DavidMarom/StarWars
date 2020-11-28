import React from 'react';
import { Like } from './Like';

export const FilmStrip = ({ title, idx }) => {
    return (
        <div className="strip">
            <p>{title}</p>
            <p><Like idx={idx} /></p>
        </div>
    )
}
