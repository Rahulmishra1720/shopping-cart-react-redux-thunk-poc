import React,{useState} from 'react';
import { useSelector,useDispatch} from "react-redux";
import { loginDetails,logoutDetails } from '../redux/product/productAction';
import ProductList from '../container/productList';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap';
import '../';

export default function Login() {

    const logindb = useSelector((state) => state.login);
    const login = useSelector((state) => state.islogin);
    
    const dispatch = useDispatch()

    const[user,setUser]=useState("")
    const[pass,setPass]=useState("")
    const[alert,setAlert]=useState(false)

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(user===logindb.username&&pass===logindb.password){
        setUser("")
        setPass("")
        setAlert(false)
        dispatch(logoutDetails(false))
        dispatch(loginDetails(true))
      }else{
        setAlert(true)
        setUser("")
        setPass("")
      }
    }

    const handleUser=(e)=>{
        setUser(e.target.value)
    }

    const handlePass=(e)=>{
      setPass(e.target.value)
    }

      if(login)
      {
        return(
            <ProductList/>
          )
      }
      else
      {
      return(
      <div className="App">
        {alert&&
        <div className="alert alert-danger" role="alert">
          Invalid Username and Password!!
        </div>
        }
        <h2>Login In</h2>
        <Form className="form">
          <FormGroup>
          <Row className="justify-content-md-center">
          <Col sm={8} lg={4}>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="user"
              id="exampleEmail"
              placeholder="example@example.com"
              onChange={handleUser}
              value={user}
            />
            </Col>
            </Row>
          </FormGroup>
          <FormGroup>
          <Row className="justify-content-md-center">
          <Col sm={8} lg={4}>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="pass"
              id="examplePassword"
              placeholder="********"
              onChange={handlePass}
              value={pass}
            />
            </Col>
            </Row>
          </FormGroup>
        <Button onClick={handleSubmit}>Login</Button>
      </Form>
    </div>
    )
  }
}

