// src/components/PodcastItem.js
import React from 'react';

const PodcastItem = ({ podcast }) => (
    <div className="podcast-item">
        <span className="ranking">{podcast.ranking}</span>
        <div className="details">
            <h2>{podcast.title}</h2>
            <p>Hosted by: {podcast.host}</p>
        </div>
    </div>
);

export default PodcastItem;
