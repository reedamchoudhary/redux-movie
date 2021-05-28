import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {countUp, countDown} from "./actions"
import {useSelector, useDispatch} from "react-redux";

function App(props) {
  const myState = useSelector((state)=> state.Counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={(event)=>{
        event.preventDefault();
        console.log(event);
        dispatch(countDown())
      }
      }> - </button>
      <input type = "text" name = "number" value = {myState}/>
      <button onClick={(event)=>{
        event.preventDefault();
        console.log(event);
        dispatch(countUp())
      }
      }> + </button>
    </div>
  );
}

export default connect()(App);
