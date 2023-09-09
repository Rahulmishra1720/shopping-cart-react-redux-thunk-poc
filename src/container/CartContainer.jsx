import React from 'react';
import CartItems from '../component/CartItems';
import { useSelector } from "react-redux";

const CartContainer = () => {
    const cart = useSelector(state => state.cart);
    if (cart.length === 0) {
        return (
            <div className="px-4 my-5 bg-light">
                <div className="container py-4 ">
                    <div className='row'>
                        <h3>Your Cart Is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <React.Fragment>
                <CartItems cart={cart} />
            </React.Fragment>
        )
    }
};

export default CartContainer;
