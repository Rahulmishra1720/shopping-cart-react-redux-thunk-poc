import { FETCH_PRODUCT,PRODUCT,ADDITEM,DELETEITEM,DETAILS,USERNAME,PASSWORD,ISLOGIN,ISLOGOUT,EMPTY,NAME} from "./productTypes";


const initialstate={
    products:[]
}

 function ProductReducer(state=initialstate,action){

    switch(action.type){
        case FETCH_PRODUCT: console.log(action.payload)
                            return action.payload 
        default: return state
    }
}


function ProductReducer2(state=null,action){

    switch(action.type){
        case PRODUCT: return action.payload 
        default: return state
    }
}


function userDetails(state={},action){

  switch(action.type){
      case DETAILS: console.log(action.payload)
                          return action.payload 
      default: return state
  }
}

const login={
  username:"user@gmail.com",
  password:"12345",
  name:"Rahul Kumar Mishra"
}

function loginDetails(state=login,action){

  switch(action.type){
      case USERNAME: return state.username
      case PASSWORD: return state.password
      case NAME: return state.Name
      default: return state
  }
}


function islogin(state=false,action){

  switch(action.type){
      case ISLOGIN: return action.payload
      case ISLOGOUT: return action.payload
      default: return state
  }
}
function islogout(state=true,action){

  switch(action.type){
      case ISLOGOUT: return action.payload
      default: return state
  }
}

const cart=[];
  
const cartReducer=(state=cart,action)=>{
  const product = action.payload
  switch(action.type){
  case ADDITEM: const exist = state.find((x)=>x.id===product.id)
                if(exist){
                  //  console.log(state.map(x=>console.log(x)))
                  return state.map((x)=>x.id===product.id?{...x,qty:x.qty+1}:x
                  )
                }
                else{
                  const product = action.payload
                  return [
                    ...state,
                    {
                      ...product,
                      qty:1
                    }
                  ]
                }
    case DELETEITEM: 
                    const exist1 = state.find((x)=>x.id===product.id)
                    if(exist1.qty  ===1){
                      return state.filter((x)=>x.id!==exist1.id)
                    }
                    else{
                      return state.map((x)=>x.id===product.id?{...x,qty:x.qty-1}:x)
                    }
    case EMPTY: return cart;
    default: return state
  }

}

export {ProductReducer,ProductReducer2,cartReducer,userDetails,loginDetails,islogin,islogout}