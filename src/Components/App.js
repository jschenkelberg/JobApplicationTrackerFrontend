import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './Navbar/navbar';
import axios from 'axios';
import ApplicationTable from './ApplicationTable/applicationTable';
import DeleteApplication from './DeleteApplication/deleteApplication';

function App() {
  const [applications, setApplications] = useState([]);

  const getAllApplications = async () => {
    let res = await axios(`https://localhost:44394/api/applications`);
    if(res.data.length !== 0){
      setApplications(res.data)
      console.log(res.data)
    }
  };

  const deleteApplication = async (id) => {       
    await axios
      .delete(`https://localhost:44394/api/applications/${id}/`)
      .then((response) => console.log(response));
    getAllApplications();
  };

  useEffect(() => {
  getAllApplications();
  }, []);

  return (
    <React.Fragment>
      <Navigation deleteApplication={deleteApplication}/>
     {/* <DeleteApplication getAllApplications={getAllApplications} deleteApplication={deleteApplication}/> */}
      <ApplicationTable applications= {applications} />
    </React.Fragment>
  );
}

export default App;
