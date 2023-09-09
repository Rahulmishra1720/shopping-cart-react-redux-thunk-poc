import React from 'react';
import ProductDetail from './productDetails';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../redux'

const FetchProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    dispatch(fetchProduct(id));
    return (
        <React.Fragment>
            <ProductDetail />
        </React.Fragment>
    )
};

export default FetchProduct;