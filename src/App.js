// src/App.js
import React from 'react';
import Header from './components/Header';
import PodcastList from './components/PodcastList';
import './App.css';

const App = () => (
    <div className="app">
        <Header />
        <PodcastList />
    </div>
);

export default App;
