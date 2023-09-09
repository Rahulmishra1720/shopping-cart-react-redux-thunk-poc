import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutDetails, loginDetails } from '../redux/product/productAction';
export default function Header() {

  const cart = useSelector((state) => state.cart);
  const logout = useSelector((state) => state.islogout);

  //calculating the total number of item in the cart
  let total = 0;
  cart.map(item => total += item.qty);

  const dispatch = useDispatch()

  const handlelogout = () => {
    dispatch(logoutDetails(true))
    dispatch(loginDetails(false))
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm" style={{ backgroundColor: "burlywood" }}>
        <div className="container ">
          <div>
            <Link to={"/"} className="navbar-brand fw-bold fs-4" >
              <span className="glyphicon glyphicon-home"> R-Mart</span>
            </Link>
          </div>
          <div className='buttons'>
            <React.Fragment>
              {
                logout ?
                  <Link to={"/login"} className='btn btn-outline-dark ms-2 butn'>
                    <i className='glyphicon glyphicon-log-in me-1' style={{ fontSize: "20px" }}>Login</i>
                  </Link> :
                  <button onClick={handlelogout} className='btn btn-outline-dark ms-2 butn'>
                    <i className='glyphicon glyphicon-log-out me-1' style={{ fontSize: "20px" }}>Logout</i>
                  </button>

              }
            </React.Fragment>
            <Link to={"/cart"} className='btn btn-outline-dark ms-2 butn'>
              <i className='glyphicon glyphicon-shopping-cart me-1' style={{ fontSize: "20px" }}>
                {
                  cart.length && <span className="position-absolute top-0 start-200 translate-middle badge rounded-pill bg-danger">{total}</span>
                }
              </i>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
};
