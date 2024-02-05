import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function Useeffect() {


  let [data,setdata] = useState("Hello");
  let [data1,setdata1] = useState("Hello1");

  useEffect(()=>{
    console.log("Hello");
  },[data]);

  const btnclick = () =>{
    // alert();
    setdata("Hello Madhu...!");
  }

  const btn1click = () =>{
    setdata1("Hello Madhu1..!");
  }


  return (
    <div className="App">

      <p>{data}</p>
      <input type='button' value={"Click Here"} onClick={btnclick}></input>
      <p>{data1}</p>
      <input type='button' value={"Click Here"} onClick={btn1click}></input>
      

    </div>
  );
}

export default Useeffect;
