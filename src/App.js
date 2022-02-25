import './App.css';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <Router>
        <div className="App">
           <Routes>
             <Route path='/checkout' element={<> <Header/> <Checkout/></> }/>
              <Route exact path='/' element={<> <Header/> <Home /> </>}/>
              <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
