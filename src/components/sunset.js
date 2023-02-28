import React from 'react';
import { Parallax } from 'react-parallax';
import sunset from '../assets/sunset.jpg'
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'

const Sunset = () => (
    <Parallax className="image"  bgImage={sunset} bgImageAlt="a white sunset along the ocean" strength={800}>
        <div className='contactContainer'>
            <a href='mailto: gitcheckoutmitch@example.com' target="_blank">
                <div className='contactCard'>
                    <FaEnvelope size={140}></FaEnvelope>
                    <p>E-MAIL</p>
                </div>
            </a>

            <a href='www.linkedin.com/in/mitchell-lemieux-b38016268' target="_blank">
                <div className='contactCard'>
                    <FaLinkedin size={140}></FaLinkedin>
                    <p>LINKEDIN</p>
                </div>
            </a>

            <a href='https://github.com/ddwk21' target="_blank">
                <div className='contactCard'>
                    <FaGithub size={140}></FaGithub>
                    <p>GITHUB</p>
                </div>
            </a>
        </div>
    </Parallax>
);

export default Sunset