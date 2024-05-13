import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

const [count,setCount] =useState(0);

//let count =0;

const increment=()=>{
  //count +=1;
  setCount(count+1);
}

const decrement=()=>{
  //count -=1;
  setCount(count-1);
}

  return (
<>
      <span className='title'> My computer</span>
      <p className='subtitle'> The count is {count}</p>
      <button onClick={decrement} className='button'>-</button>
      <button onClick={increment} className='button'>+</button>
</>
  );
}

export default App;
