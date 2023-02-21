import { Parallax } from 'react-parallax';
import brick from '../assets/brick.jpg'

const Brick = () => (
    <Parallax className="image"  bgImage={brick} bgImageAlt="a white brick along the ocean" strength={800}>
    </Parallax>
);

export default Brick