import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';


function Example() {
    const [showmodal, setShowmodal] = useState(false);
    const handleClosemodal = () => setShowmodal(false);
    const handleShowmodal = () => setShowmodal(true);

    const resetpassword = ()=>{alert("HEloo")}


     return (
        <>

      <button onClick={handleShowmodal}> Reset Passowrd </button>

    <Modal show={showmodal} onHide={handleClosemodal}>
                <Modal.Header closeButton>
                    <Modal.Title>Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>HELLO</h1>
                    {/* <input type="text" className='form form-control' placeholder='Enter current password' name='password' onChange={(e)=>setoldpassword(e.target.value)} />
                    <input type="text" className='form form-control' placeholder='Enter new password' name='password' onChange={(e)=>setnewpassword(e.target.value)} /> */}
                </Modal.Body>
                
                <Modal.Footer>
                    <Button  onClick={handleClosemodal}> Close</Button>
                    <Button  onClick={resetpassword}> Reset Password </Button>
                </Modal.Footer>
    </Modal>

    
    </>
    )
    
}

export default Example;