import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent' ;
import Login from './components/UserManagement' ;
import Signup from "./components/Signup" ;
import Home from "./components/Home" ;
import {BrowserRouter} from "react-router-dom" ;


function App() {
  return (
    
      <BrowserRouter> 
      <div className="App">
     <Main/>
     </div>
     </BrowserRouter> 
   
  );
}

export default App;
