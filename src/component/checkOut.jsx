import React, { useState } from 'react';
import { userDetails } from '../redux';
import { Link } from "react-router-dom";
import Login from './Login';
import { useSelector, useDispatch } from "react-redux";

const CheckOut = () => {
  let totalItem = 0;
  let total = 0;

  const cart = useSelector(state => state.cart);
  const login = useSelector((state) => state.islogin);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();

  cart.map(item => totalItem += item.qty);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const itemList = (item) => {
    total = total + (item.price * item.qty)
    return (
      <li className='list-group-item d-flex justify-content-between lh-sm' key={item.id}>
        <div>
          <h6 className='my-0'>{item.title}</h6>
        </div>
        <span className='text-muted'> x {item.qty}</span>
        <span className='text-muted'> ${item.price * item.qty}</span>
      </li>
    )
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Email Validation
    var phoneno = /^\d{10}$/;
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (phone === "" || email === "" || address === "") {
      setAlert(true);
    }
    else {
      //validating emil and phone Number
      if (!phone.match(phoneno) || !email.match(mailformat)) {
        setAlert(true);
      }
      else {
        const userdetails = {
          phone: phone,
          email: email,
          address: address
        }
        setAddress("");
        setEmail("");
        setPhone("");
        setAlert(false);
        dispatch(userDetails(userdetails));
      }
    }
  }
  if (login) {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='App'>
            {alert &&
              <div class="alert alert-danger" role="alert">
                All input field must be Correctly field!!
              </div>
            }
          </div>
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-danger rounded-pill">{totalItem}</span>
              </h4>
              <ul className="list-group mb-3">
                {cart.map(itemList)}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${total}</strong>
                </li>
              </ul>
            </div>

            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" >
                <div className="row g-3">

                  <div className="col-sm-6">
                    <label for="phone" className="form-label">Phone Number</label>
                    <input type="text" name="phone" onChange={handlePhone} value={phone} className="form-control" id="phone" placeholder="" required="" />
                  </div>

                  <div className="col-12">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" name="email" onChange={handleEmail} value={email} className="form-control" id="email" placeholder="you@example.com" />
                  </div>

                  <div className="col-12">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" name="address" onChange={handleAddress} value={address} className="form-control" id="address" placeholder="1234 Main St" required="" />
                  </div>

                  <div className="col-12">
                    <button className="w-50 btn btn-primary btn-md my-4" onClick={handleSubmit}>
                      Submit
                    </button><br />
                    <Link to={"/order"} className="w-50 btn btn-primary btn-md py-2 my-4" >
                      Proceed To Buy
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    )
  }
}

export default CheckOut;