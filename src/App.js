import logo from './logo.svg';
import './App.css';
import Cliff from './components/cliff'
import TextBox from './components/textbox';
import Rust from './components/rust';
import Brick from './components/brick';
import Sunset from './components/sunset';

function App() {
  return (
    <div className="App">
      <Cliff></Cliff>
      <TextBox header="I'm Mitch" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ornare arcu odio ut sem nulla pharetra diam sit amet. Integer vitae justo eget magna fermentum iaculis eu non. Egestas pretium aenean pharetra magna. Varius vel pharetra vel turpis nunc. Amet venenatis urna cursus eget nunc scelerisque. Sem integer vitae justo eget magna fermentum iaculis eu non. Tristique nulla aliquet enim tortor at auctor urna."/>
      <Rust></Rust>
      <TextBox header="Projects" content="Here's some stuff I've made. I hope you like it."/>
      <Brick></Brick>
      <TextBox header="placeholder"/>
      <Sunset></Sunset>


    </div>
  );
}

export default App;
