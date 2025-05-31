import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

// this is my online policy
function Policy() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* this is my online order policy */}
            <Button variant="success" className="fontTwo mb-2" onClick={handleShow}>
                Online Order Policy
        </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="text-success fontOne">Online Order policy</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-danger fontTwo">Once your order is paid for online there are no refunds due to it is made to order for pick up. If you have special requirements please be specific, so you get your desired pizza. Thank you for choosing Pizza By The Slice & Shakeups on ICE</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
const Contact = () => {

    return (
        // this is my component that has my phone and email in it.
        <div className="col-md-4 mt-2 ">
            <h6 className="text-danger fontTwo">Contact Us:</h6>
            <p className="text-success fontOne">Phone: 574-293-8475</p>
            <h6 className="text-danger fontTwo">Email:</h6>
            <p className="text-success fontTwo">pizzabytheslice@gmail.com</p>
            <Policy />
        </div>
    )
}
export default Contact; 