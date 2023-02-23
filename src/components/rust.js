import React from 'react';
import { Parallax } from 'react-parallax';
import rust from '../assets/rust.jpg'
import {FaReact, FaDatabase, FaNodeJs, FaHtml5, FaCss3} from 'react-icons/fa'


const Rust = () => (
    <Parallax className="image"  bgImage={rust} bgImageAlt="Rusting metal" strength={800}>
        <div className='rustContainer'>
            <div className='rustTxt'>
                <span>I</span><span>BUILD</span><span>COOL</span><span>STUFF</span><span>WITH</span>
            </div>
            <div className='techs'>
                <FaReact size={140}/>
                <FaDatabase size={140}/>
                <FaNodeJs size={140}/>
                <FaHtml5 size={140}/>
                <FaCss3 size={140}/>
            </div>
        </div>
    </Parallax>
);

export default Rust