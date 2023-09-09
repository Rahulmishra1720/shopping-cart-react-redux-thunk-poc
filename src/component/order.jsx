import React from 'react';
import { useSelector } from "react-redux";

const Order = () => {
    const user = useSelector(state => state.user);
    const userName = useSelector((state) => state.login);
    const cart = useSelector(state => state.cart);

    let total = 0;
    const itemList = (item) => {
        total = total + (item.price * item.qty);
        return (
            <li className='list-group-item d-flex justify-content-between lh-sm'>
                <div>
                    <h6 className='my-0'>{item.title}</h6>
                </div>
                <span className='text-muted'>x {item.qty}</span>
                <span className='text-muted'>${item.price * item.qty}</span>
            </li>
        )
    };
    return (
        <React.Fragment>
            <div className='row'>
                <div className='col-lg-6 ' style={{ marginLeft: "25%", marginRight: "50px", marginTop: "20px" }}>
                    <div className="alert alert-success" role="alert">
                        <div className="col-md-12 border-right p-2">
                            <div className="text-center order-details">
                                <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                                    <span className="check1">
                                        <i className="glyphicon glyphicon-ok-sign"></i>
                                    </span>
                                    <span className="font-weight-bold">Your order has been placed Successfully</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="alert-heading">Hello, {userName.name}</h4>
                        <p>Phone Number:- {user.phone}</p>
                        <p>Customer Email:- {user.email}</p>
                        <p>Customer Address:- {user.address}</p>
                        <ul>
                            <h5>Order Details</h5>
                            {cart.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Order;