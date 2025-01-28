import logo from './logo.svg';
import './App.css';

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor2 = () => <div style={{ background: hexaColor() }} className='colorDiv'>{hexaColor()}</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {HexaColor2()}
          {HexaColor2()}
          {HexaColor2()}
          {HexaColor2()}
          {HexaColor2()}
          {HexaColor2()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
