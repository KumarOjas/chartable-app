// src/components/PodcastList.js
import React, { useEffect, useState } from 'react';
import PodcastItem from './PodcastItem';

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        // Simulate fetching podcast data
        fetchPodcasts();
    }, []);

    const fetchPodcasts = () => {
        // Mock data for now
        const mockData = Array.from({ length: 100 }, (_, index) => ({
            id: index + 1,
            title: `Podcast ${index + 1}`,
            host: `Host ${index + 1}`,
            ranking: index + 1,
        }));

        setPodcasts(mockData);
    };

    return (
        <div className="podcast-list">
            {podcasts.map(podcast => (
                <PodcastItem key={podcast.id} podcast={podcast} />
            ))}
        </div>
    );
};

export default PodcastList;
