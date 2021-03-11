import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Details/Details';
import Home from './Home/Home';
import Nomatch from './Nomatch/Nomatch';
function App() {
 
  return (
    <div >
      <Router>
        <Switch>
        <Route path='/home'>
            <Home></Home>
          </Route>
           <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/details/:abc'>
            <Details/>
          </Route>
          <Route path="*">
            <Nomatch/>
          </Route> 
          
        </Switch>
      </Router>
      <p style={{textAlign:'center',color:'#ddd',padding:'5px',backgroundColor: '#282c34'}}  >  &copy; All Right Reserved - {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
