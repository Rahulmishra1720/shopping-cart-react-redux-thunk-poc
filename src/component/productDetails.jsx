import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux';

const Product = (props) => {
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };
    return (
        <React.Fragment>
            <div className='col-sm-6 bg-light'>
                <img src={props.products.image} alt={props.products.title} height={400} width={400} />
            </div>
            <div className='col-sm-6 bg-light'>
                <h4 className='text-uppercase text-black-50'>{props.products.category}</h4>
                <h1 className='display-5'>{props.products.title}</h1>
                <h3 className='display-6 fw-bold my-4'>${props.products.price}</h3>
                <p className='lead justify-content-end' style={{ textAlign: 'justify' }}>{props.products.description}</p>
                <button className='btn btn-dark butn ms-2 mx-4 px-2 py2' onClick={() => addProduct(props.products)}>
                    Add To Cart
                </button>
            </div>
        </React.Fragment>
    );
};

export default Product;
