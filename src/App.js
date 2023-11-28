import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';
import AccComp from './components/AccComp';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#24253e'
      showAlert("Dark Mode is Enabled", "success")
      document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode is Enabled", "success")
      document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <NavBar title="TextUtil" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <TextForm alert={alert} showAlert={showAlert}  mode={mode} />
    {/* <Routes>
          <Route exact path="/" element={<TextForm alert={alert} showAlert={showAlert}  mode={mode} />}></Route>
          <Route exact path="/about" element={<AccComp></AccComp>} >
          </Route>
    </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
