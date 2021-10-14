// import React, {useState} from 'react';
// import { Button, Modal, Row, Col } from "react-bootstrap";



// const DeleteApplication = ({getAllApplications, deleteApplication}) => {
//     const [show, setShow] = useState(false);      
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <React.Fragment>
//                          <Button className="greenbutton" size="small" aria-label="add" onClick={handleShow}>
// -            </Button>
      
//             <Modal show={show} onHide={handleClose}>

//               <Modal.Header closeButton>
//               <h3>Delete Application</h3>
//               </Modal.Header>  
//               <Modal.Body> 
//               <div className="container">
//               <form className= "form-horizontal">
//               <div className="form-horizontal">
//               <input
//               id="id"
//               className="form-contol"
//                 type="text"
//                 name="id"
//                 placeholder="id"             
               
//               />
     
//               <Button className="greenbutton" type="submit" onClick={deleteApplication(id)}> Submit </Button>
//               </div>
//             </form> 
//             </div>


//               </Modal.Body>              
//             </Modal>
//         </React.Fragment>
//       );
// }
 
// export default DeleteApplication;{getAllApplications
// }