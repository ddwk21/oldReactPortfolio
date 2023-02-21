import { Parallax } from 'react-parallax';
import rust from '../assets/rust.jpg'


const Rust = () => (
    <Parallax className="image"  bgImage={rust} bgImageAlt="Rusting metal" strength={800}>
        <div className='rustContainer'>
            <div className='rustTxt'>
                <span>I</span><span>BUILD</span><span>COOL</span><span>STUFF</span><span>WITH</span>
            </div>
            <div className='techs'>
                <FontAwesomeIcon icon="fa-brands fa-react fa-x10" />
            </div>
        </div>
    </Parallax>
);

export default Rust