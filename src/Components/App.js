import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Navbar/navbar';
import axios from 'axios';
import ApplicationTable from './ApplicationTable/applicationTable';

function App() {
  const [applications, setApplications] = useState([ ]);

  const getAllApplications = async () => {
    let res = await axios(`https://localhost:44394/api/applications`);
    if(res.data.length !== 0){
      setApplications(res.data)
      console.log(res.data)
    }
  };

  useEffect(() => {
  getAllApplications();
  }, []);

  return (
    <React.Fragment>
      <Navigation />
      <ApplicationTable />
    </React.Fragment>
  );
}

export default App;
