import {NavLink,Link} from "react-router-dom";
import * as React from 'react';

const Products = (props) => {
return ( 
<React.Fragment>
{props.products.map(product=>{
    return(
    <div className='col-md-3 mb-4' key={product.id} style={{backgroundColor:"antiquewhite"}}>
        <div className='card h-100 text-center p-4 bg-light' key={product.id}>
        <Link to={`prodDetail/${product.id}`}>
        <img className="card-img-top" src={product.image} alt={product.title} height="250px"/>
        </Link>
  <div className="card-body">
    <h5 className="card-title mb-0">{product.title.substring(0,24)}....</h5>
    <p className="card-text lead fw-bold">${product.price}</p>
    <NavLink to={`prodDetail/${product.id}`}>
        <button className='btn btn-dark butn'>Buy Now</button> 
    </NavLink>
  </div>
</div>
</div>
    )
})}
</React.Fragment>
);
}

export default Products;
