import React from 'react'
import { useSelector} from 'react-redux'
import Products from '../component/products'

const ProductList = () => {
    const products = useSelector(state=>state.product)
    if(!products.length){
        return( 
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
        <Products products={products} />
     );
}
 
export default ProductList;