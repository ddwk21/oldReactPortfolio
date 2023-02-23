import { Parallax } from 'react-parallax';
import brick from '../assets/brick.jpg'

const Brick = () => (
    <Parallax className="image"  bgImage={brick} bgImageAlt="a white brick along the ocean" strength={800}>
        <div>
            <h1>TEST</h1>
        </div>
    </Parallax>
);

export default Brick