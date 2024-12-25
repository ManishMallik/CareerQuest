import Button from '@mui/material/Button';
import {Routes, Route, HashRouter as Router} from 'react-router-dom';


function EventTracker() {

  function NikisFirstFuc(){
    console.log("In reality Nikita sucks (not D, she'll get that later");
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
          Event Tracker
        </a>
      </header>
    </div>
  );
}

export default EventTracker;
