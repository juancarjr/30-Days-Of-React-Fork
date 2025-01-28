import logo from './logo.svg';
import './App.css';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import jsLogo from './images/js_logo.png';
import reactLogo from './images/react_logo.png';
import asabeneh from './images/asabeneh.jpg';


const Images = (props) => {
      const logoList = props.logos.map((logo) => <img src={logo} alt={logo} width='100px' height='100px' />);
      return <div className='imgDiv' >{logoList}</div>;
};

// Hexadecimal color generator
const HexaColor = (props) => {
  let str = '0123456789abcdef'
  let colors = []
  for (let j = 0; j < props.quantity; j++) {
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    colors.push('#' + color)
  }
  const colorList = colors.map((color) => <div className='colorDiv' style={{backgroundColor: color}}>{color}</div>)
  return <div className='container'>{colorList}</div>
}

const Input = () => {
  return <form>
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <input type='text' name='firstName' placeholder='First name'/>
        <input type='text' name='lastName' placeholder='Last name' />
        <input type='email' name='email' placeholder='Email' />
      </div>
      <button type="submit">Subscribe</button>
    </div>
  </form>
}

const FormDiv = () => {
  return <div id='form'>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <Input />
  </div>
}

const skills = [
  "HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", 
  "Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", 
  "MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"
  ];

const Profile = (props) => {
  return <div className='profile'>
    <img src={props.image} alt='  ' width={'150'} height={'150'} />
    <h2>{props.name}</h2>
    <h3>{props.subtitle}</h3>
    <h2>Skills</h2>
    <div className='skills'>
      {props.skills.map(skill => <div className='skill'>{skill}</div>)}
    </div>
    <h3> Joined on {props.date} </h3>
  </div>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Images logos={[cssLogo, htmlLogo, jsLogo, reactLogo]} />
        <HexaColor quantity={5} />
        <FormDiv/>
        <Profile
          image={asabeneh}
          name='Asabeneh Yetayeh'
          subtitle='Senior Developer, Finland'
          skills={skills}
          date='Jan 2020'
         />
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
