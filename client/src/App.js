import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Teacherpage from './Teacherpage'; // component
import LoginScreen from './LoginScreen';
import Eachstd from './Eachstd';
import Hometc from './Hometc';
import Homestd from './Homestd';
import { useLoaderData } from 'react-router-dom';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:1337"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const role = localStorage.getItem('role')    //เซ็ตตัวrole ตอนโหลด


  useEffect(()=>{
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth==='true'){
      setIsAuthenticated(true);//เซ็ตตัวisauthen ตอนโหลด
    }
    console.log('role',role)
  },[])

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated','true') //3.setisAuthenticated
    console.log('loginsuccess');
  };

  return (
    
      <div className='App'>
        <header className="App-header">
          {/* {!isAuthenticated &&
            <LoginScreen onLoginSuccess={handleLoginSuccess} onSetRole={handleSetRole} />}
          {isAuthenticated && 
            <Eachstd />}    */}

          {localStorage.getItem('isAuthenticated') == 'true' && role ? (role === 'Student' ? <Homestd /> : <Hometc />) : 
          (<LoginScreen onLoginSuccess={handleLoginSuccess} />)}
        </header>
      </div>
      
      // <div>
      // {/* ถ้ามี token, แสดงหน้า Home, ไม่มีแสดงหน้า Login */}
      // {jwt ? <Eachstd whoLogin={std_id} jwt={jwt} /> : <Login_Screen onLogin={handleLogin} onAddID={onAddstdID} />}
      // </div>
  );
}

export default App;
