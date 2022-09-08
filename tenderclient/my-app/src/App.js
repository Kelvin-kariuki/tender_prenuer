import React,{useState , useEffect}from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar.js"
import Login from "./login.js"
import Homee from './homee';
import ProtectedRoutes from './ProtectedRoutes';
import TenderForm from './formtender';
import CompanyForm from './formcom';


function App() {
  const [tender, setTender]=useState([])
  const [loggedin, setLoggedin]=useState(false)

  useEffect(() => {
    fetch(`http://localhost:9292/tender`)
    .then(response => response.json())
    .then((data) => {
     
     setTender(data)
    
    })
  }, [])

  console.log(tender)
  return (

    <div>
    <Navbar/>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login loggedin={loggedin} logSet={setLoggedin}/>}/>
     <Route element={<ProtectedRoutes loggedin={loggedin}/>}/> 
      <Route path='/home' element={<Homee tender={tender}/>}/>
      <Route path='/form' element={<TenderForm setTender={setTender} tender={tender}/>}/>
     
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App