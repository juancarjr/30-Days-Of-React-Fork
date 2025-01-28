import React from 'react';
import ReactDOM from 'react-dom/client';
import asabenehImg from './images/asabeneh.jpg';
import reactImg from './images/react_logo.png';
import cssImg from './images/css_logo.png';
import htmlImg from './images/html_logo.png';
import './index.css';
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Instructor: Asabeneh Yetayeh</p>
      <small>Date: Oct 1, 2020</small>
    </div>
  </header>
)

// JSX element, main
const imgs = (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img src={reactImg} alt='react' width={'150'} height={'150'}/>
    <img src={htmlImg} alt='html' width={'150'} height={'150'}/>
    <img src={cssImg} alt='css' width={'150'} height={'150'}/>
  </div>
)



const input = (
<form>
	<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
		<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
			<input type='text' name='firstName' placeholder='First name'/>
			<input type='text' name='lastName' placeholder='Last name' />
			<input type='email' name='email' placeholder='Email' />
		</div>
		<button type="submit">Subscribe</button>
	</div>
</form>
)

const formDiv = (
	<div id='form'>
			<h1>SUBSCRIBE</h1>
			<p>Sign up with your email address to receive news and updates.</p>
			{input}
	</div>
)

const skills = [
	"HTML", "CSS", "Sass", "JS", "React", "Redux", "Node", "MongoDB", 
	"Python", "Flask", "Django", "NumPy", "Pandas", "Data Analysis", 
	"MYSQL", "GraphQL", "D3.js", "Gatsby", "Docker", "Heroku", "Git"
  ];

const profile = (
	<div className='profile'>
		<img src={asabenehImg} alt='asabeneh' width={'150'} height={'150'} />
		<h2>Asabeneh Yetayeh</h2>
		<h3>Senior Developer, Finland</h3>
		<h2>Skills</h2>
		<div className='skills'>
			{skills.map(skill => <div className='skill'>{skill}</div>)}
		</div>
	</div>
)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li> JavaScript</li>
      </ul>
      {imgs}
	  {formDiv}
	  {profile}
    </div>
  </main>
)

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

root.render(app);
