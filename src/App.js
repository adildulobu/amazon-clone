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
import { useEffect } from 'react';
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth';
import {useStateValue } from './StateProvider'

function App() {
  const [{}, dispacth] = useStateValue();

  useEffect (() =>{
      onAuthStateChanged(auth, authUser => {
        console.log('The user is >>>')

        if(authUser){
            dispacth({
              type: 'SET_USER',
              user: authUser
            })
        }else{
          dispacth({
            type: 'SET_USER',
            user: null
          })
        }
      })
  }, [])


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
