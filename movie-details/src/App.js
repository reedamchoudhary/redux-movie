import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {countUp, countDown} from "./actions"

function App(props) {
  return (
    <div className="App">
      <button onClick={(event)=>{
        event.preventDefault();
        console.log(event);
        props.dispatch(countUp())
      }
      }> - </button>
      <input type = "text" name = "number" />
      <button> + </button>
    </div>
  );
}

export default connect()(App);
