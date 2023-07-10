import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillCartFill } from "react-icons/bs";
import { GlobalContext } from "../Context/context";
import Card from 'react-bootstrap/Card';

function Cart() {
  const { state, dispatch } = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(state);
  }, [show]);

  return (
    <>
      <button
        onClick={handleShow}
        type="button"
        className="btn btn-dark position-relative"
      >
        <BsFillCartFill />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {state.cart.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart.map((val, key) => (
            <Card key={key}>
              <Card.Body>{val.title} - {val.price}$  <span className="badge bg-secondary">{val.productQuantity}</span></Card.Body>
            </Card>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
