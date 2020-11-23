import React from 'react';


import Navigation from './components/Navigation';
import Memories from './components/Memories';
import Gallery from './components/Gallery';
import Eulogy from './components/Eulogy';
import Hero from './components/Hero';

import './App.scss';

const App = () => (
    <div>
        <Navigation />
        <Hero />
        <Eulogy />
        <Gallery />
        <Memories />
    </div>
);

export default App;