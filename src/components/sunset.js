import React from 'react';
import { Parallax } from 'react-parallax';
import sunset from '../assets/sunset.jpg'

const Sunset = () => (
    <Parallax className="image"  bgImage={sunset} bgImageAlt="a white sunset along the ocean" strength={800}>
        <h1>Test</h1>
    </Parallax>
);

export default Sunset