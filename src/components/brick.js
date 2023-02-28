import { Parallax } from 'react-parallax';
import brick from '../assets/brick.jpg'
import encycloneImg from '../assets/encyclone-snip-real.png'
import wedoImg from '../assets/we-do-snip-real.png'
import arthubImg from '../assets/art-hub-snip.png'

const Brick = () => (
    <Parallax className="image"  bgImage={brick} bgImageAlt="a white brick along the ocean" strength={800}>
        <div className='projectHolder'>
            <a href='https://ddwk21.github.io/art-hub/'target="_blank">
                <div className='projectCard'>
                    <img className='projectImg' src={arthubImg}></img>
                    <div className='overlay'>
                        <p>API driven infinite scrolling Art Museum</p>
                    </div>
                </div>
            </a>
            <a href='https://we-do-application.herokuapp.com/'target="_blank">
                <div className='projectCard'>
                    <img className='projectImg' src={wedoImg}></img>
                    <div className='overlay'>
                        <p>Full-Stack Event Hosting App</p>
                    </div>
                </div>
            </a>
            <a href='https://fierce-sands-41595.herokuapp.com/'target="_blank">
                <div className='projectCard'>
                    <img className='projectImg' src={encycloneImg}></img>
                    <div className='overlay'>
                        <p>MERN Stack Encyclopedia Brittanica</p>
                    </div>
                </div>
            </a>
        </div>
        
    </Parallax>
);

export default Brick