import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent' ;
import Login from './components/UserManagement' ;
import Signup from "./components/Signup" ;
import Home from "./components/Home" ;
import {BrowserRouter} from "react-router-dom" ;
import { Provider } from "react-redux"; 
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter> 
      <div className="App">
     <Main/>
     </div>
     </BrowserRouter> 
     </Provider>
   
  );
}

export default App;
