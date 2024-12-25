import Button from '@mui/material/Button';
import {Routes, Route, HashRouter as Router} from 'react-router-dom';


function JobTracker() {

  function NikisFirstFuc(){
    console.log("In reality Nikita is the best");
  }

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default JobTracker;
