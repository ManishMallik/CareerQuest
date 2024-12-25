import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import MyAppBar from './components/MyAppBar';
import JobTracker from './pages/JobTracker';
import EventTracker from './pages/EventTracker';
import {Routes, Route, HashRouter as Router} from 'react-router-dom';


function App() {

  function NikisFirstFuc(){
    console.log("In reality Nikita is the best");
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edid <code>src/App.js</code> and save to reload.
        </p>
        <Button variant='contained' onClick={NikisFirstFuc}>
          <p>
            Daddy is the best 
          </p>
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
      <MyAppBar/>
        <Routes>
          <Route path='/' element={<JobTracker/>}/>
          <Route path='/eventTracker' element={<EventTracker/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
