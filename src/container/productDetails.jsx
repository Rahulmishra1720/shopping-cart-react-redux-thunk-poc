import React from 'react'
import Product from '../component/productDetails'
import {useSelector} from 'react-redux'
const ProductDetail = () => {
    
    const product = useSelector(state=>state.productDetail)
    if(product==null){
        
        return (
            <div className="d-flex justify-content-center ">
                <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden"/>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden"/>
                </div>
                <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden"/>
                </div>
                <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden"/>
                </div>
                <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden"/>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden"/>
                </div>
                <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden"/>
                </div>
                <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden"/>
                </div>
            </div>
        )
    }
    return ( 
        <React.Fragment>
            <div className='container py-5'>
            <div className='row py-4'>
        <Product products={product}></Product>
        </div>
        </div>
        </React.Fragment>

     );
}
 
export default ProductDetail;