import React, {useState} from 'react';
import { Button, Modal, Row, Col } from "react-bootstrap";
import useForm from '../UseForm/useForm';
import axios from 'axios';



const DeleteApplication = ({applications, getAllApplications}) => {
    const [show, setShow] = useState(false);      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const{values, handleChange, handleSubmit} = useForm(removeApplication);
    function removeApplication() {
        deleteApplication(values);
        console.log(values);
    }

    const deleteApplication = async (id) => {       
        await axios
          .delete(`https://localhost:44394/api/applications/${id}/`)
          .then((response) => console.log(response));
        getAllApplications();
      };
    

    return (
        <React.Fragment>
                         <Button className="greenbutton" size="small" aria-label="add" onClick={handleShow}>
-            </Button>
      
            <Modal show={show} onHide={handleClose}>

              <Modal.Header closeButton>
              <h3>Delete Application</h3>
              </Modal.Header>  
              <Modal.Body> 
              <div className="container">
              <form className= "form-horizontal">
              <div className="form-horizontal">
              <input
              id="id"
              className="form-contol"
                type="text"
                name="id"
                placeholder="id"             
                onChange={handleChange}
                value={values.id}
              />
     
              <Button className="greenbutton" type="submit" onClick={deleteApplication(values)}> Submit </Button>
              </div>
            </form> 
            </div>


              </Modal.Body>              
            </Modal>
        </React.Fragment>
      );
}
 
export default DeleteApplication;
