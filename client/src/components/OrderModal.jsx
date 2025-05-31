import { Button, Modal } from "react-bootstrap"
import { useState } from 'react'
import AdminCard from './AdminCard'

// this is my orderModal to display to the admin that the order has already been completed.
function OrderModal({ order }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="text-danger bg-transparent border-0" onClick={handleShow}>
        {order.firstName} {order.lastName} ${order.total.toFixed(2)}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Completed Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdminCard order={order} />
        </Modal.Body>
      </Modal>
    </>
  );
}
export default OrderModal;