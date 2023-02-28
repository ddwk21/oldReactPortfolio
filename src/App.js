import logo from './logo.svg';
import './App.css';
import Cliff from './components/cliff'
import TextBox from './components/textbox';
import Rust from './components/rust';
import Brick from './components/brick';
import Sunset from './components/sunset';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title='Mitchell Lemieux'
  },[]);
  return (
    <div className="App">
      <Cliff></Cliff>
      <TextBox header="I'm Mitch" content="I'm a full-stack developer embarking on a new journey into the space. Driven by passion for problem solving and learning, I first started experimenting with coding at the age of 12."/>
      <Rust></Rust>
      <TextBox header="Projects" content="Here's a few things I've built. I hope you like them."/>
      <Brick></Brick>
      <TextBox header="Contact Me" content="I'm always working on something new. To find out more about whatever I'm building, or inquire about hiring me, please click one of the links below!"/>
      <Sunset></Sunset>


    </div>
  );
}

export default App;
