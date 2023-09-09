import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCart, addCart, empty } from "../redux";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const handleClose = (cartItem) => {
    dispatch(deleteCart(cartItem));
  };
  const handleAdd = (cartItem) => {
    dispatch(addCart(cartItem))
  };
  const emptyCart = () => {
    dispatch(empty())
  };

  return (
    <React.Fragment>
      {props.cart.map((cart) => {
        return (
          <div className="px-4 my-5 bg-light rounded-3" key={cart.id}>
            <div className="container">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-4">
                  <img src={cart.image} alt={cart.title} height="200px" width="180px"></img>
                </div>
                <div className="col-md-4">
                  <h3>{cart.title} x {cart.qty}</h3>
                  <p className="lead fw-bold">${cart.price * cart.qty}</p>
                </div>
                <div className="col-md-4 my-4 ">
                  <button className="btn-close float-end mx-2" aria-label="add" onClick={() => handleAdd(cart)}>
                    <i className='glyphicon glyphicon-plus me-1' />
                  </button>
                  <button className="btn-close float-end" aria-label="Close" onClick={() => handleClose(cart)}>
                    <i className='glyphicon glyphicon-minus me-1' />
                  </button>

                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="container">
        <div className="row">
          <button onClick={emptyCart} className="btn btn-outline-primary mb-5 w-25 mx-auto">
            Empty Cart
          </button>
          <NavLink to={"/checkout"} className="btn btn-outline-primary mb-5 w-25 mx-auto">
            Proceed To Checkout
          </NavLink><br />

        </div>
      </div>
    </React.Fragment>
  )
};

export default CartItems;
