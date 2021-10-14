import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import useForm from '../UseForm/useForm';
import { Button, Modal,Row,Col } from "react-bootstrap";
import axios from 'axios';



const AddApplication = ({getAllApplications}) => {

    const [show, setShow] = useState(false);      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const{values, handleChange, handleSubmit} = useForm(applicationForm);
    function applicationForm() {
        postApplication(values);
        console.log(values);
    }
    const postApplication = async (values) => {
        await  axios.post(
           `https://localhost:44394/api/applications`,
           values
         ).then(res => {
             console.log(res);           
         }).catch(err => console.log(err));
         getAllApplications();
       };

    return (
        <React.Fragment>
         <Button className="greenbutton" size="small" aria-label="add" onClick={handleShow}>
+            </Button>
         <Modal show={show} onHide={handleClose}>

<Modal.Header closeButton>
<h3>Add New Application</h3>
</Modal.Header>  
<Modal.Body> 
<div className="container">
<form className= "form-horizontal">
<div className="form-horizontal">
<input
              id="jobTitle"
              className="form-contol"
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                onChange={handleChange}
                value={values.jobTitle}
              />
<input
              id="company"
              className="form-contol"
                type="text"
                name="company"
                placeholder="Company"
                onChange={handleChange}
                value={values.company}
              />
<input
              id="link"
              className="form-contol"
                type="text"
                name="link"
                placeholder="Posting Link"
                onChange={handleChange}
                value={values.link}
              />
<select
                  className="form-select form-select-sm"
                  value={values.status}
                  type="text"
                  name= "status"
                  onChange={handleChange}
                >
                  <option placeholder>Select Status</option>
                  <option value="applied">Applied</option>
                  <option value="1st Interview">1st Interiview</option>
                  <option value="Code Challenge">Code Challenge</option>
                  <option value="2nd Interview">2nd Interview</option>
                  <option value="3rd Interview">3rd Inteview</option>
                  <option value="Pending Offer">Pending Offer</option>
                  <option value="Job Offer">Job Offer</option>                                   
                </select>              
<input
              id="comments"
              className="form-contol"
                type="text"
                name="comments"
                placeholder="Notes"
                onChange={handleChange}
                value={values.comments}
              />
  
<Button className="greenbutton" type="submit" onClick={handleSubmit}> Submit </Button>
</div>
</form> 
</div>


</Modal.Body>              
</Modal>
        </React.Fragment>
      );
}
 
export default AddApplication;