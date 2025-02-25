import './App.css';

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
  }
  return true;
}

const NumberGenerator = () => {
  const numbers = []
  for (let i = 0; i < 32; i++) {
    if (i % 2 === 0) {
      numbers.push({value: i, color: '#21BF73'})
    } else if (isPrime(i)) {
      numbers.push({value: i, color: '#FD5E53'})
    } else {
      numbers.push({value: i, color: '#FFDD00'})
    }
  }
  return numbers
}

const BlockGenerator = (props) => {
  const blocks = props.numbers.map((number) => <div className='block' style={{backgroundColor: number.color}} key='{props.number}'>{number.value}</div>)
  return <div className='blocks'>{blocks}</div>
}

function App() {
  return (
    <div className="App">
      <h1>30 Days of React</h1>
      <h2>Number Generator</h2>
      <div className='container'>
        <BlockGenerator numbers={NumberGenerator()} />
      </div>
    </div>
  );
}

export default App;
