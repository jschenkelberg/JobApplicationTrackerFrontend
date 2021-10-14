import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Navbar/navbar';
import axios from 'axios';
import ApplicationTable from './ApplicationTable/applicationTable';
import DeleteApplication from './DeleteApplication/deleteApplication';
import jwtDecode from 'jwt-decode';
import LoginForm from './Login/login';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();


  const getAllApplications = async () => {
    let res = await axios(`https://localhost:44394/api/applications`);
    if(res.data.length !== 0){
      setApplications(res.data)
      console.log(res.data)
    }
  };



  useEffect(() => {
  const jwt = localStorage.getItem('token');
  createCurrentUser();
  setToken(jwt)
  getAllApplications();
  try{
    const user = jwtDecode(jwt);
    setCurrentUser({user})
    setLoading(false);
  }
  catch {
    setLoading(false);
  }
  }, []);

  const setUserToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    const user = jwtDecode(token);
    setCurrentUser(user);
    setLoading(false);
    console.log(user);
    window.location = "/";
  };

  const createCurrentUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <React.Fragment>
      <Navigation />
     {/* <DeleteApplication getAllApplications={getAllApplications} deleteApplication={deleteApplication}/> */}
      {/* <ApplicationTable applications= {applications} /> */}
    
      <Router>
        {!loading &&        
        <Switch>
           <Route path="/Login"  exact render={props => <LoginForm {...props}   setUserToken={setUserToken}  />} />
           <Route path="/Table"  exact render={props => <ApplicationTable {...props} applications= {applications} />} />
        </Switch>
        }
      </Router>
    </React.Fragment>
  );
}

export default App;
