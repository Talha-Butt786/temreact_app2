import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ShoppingList from "./ShoppingList";
import Board from "./TictacToe";

function App() {
  const [viewname,setName] = useState()
  return (
    <div className="App">
        <h1>"hello,{viewname}"</h1>
        <input type={"text"} onChange={(e)=>setName(e.target.value)}/>
        <ShoppingList/>
        <Board/>
    </div>
  );
}

export default App;
