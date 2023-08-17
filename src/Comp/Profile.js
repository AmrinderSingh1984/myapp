import React from 'react'
import {user_info} from './Home'
import {loginn} from './Login'
import m1 from "./images/m1.jpg";
import m2 from "./images/m2.jpg";
import m3 from "./images/m3.jpg";
import m4 from "./images/m4.jpg";
import m5 from "./images/m5.jpg";
import l1 from "./images/l1.jpg";
import l2 from "./images/l2.jpg";
import l3 from "./images/l3.jpg";
import l4 from "./images/l4.jpg";
import l5 from "./images/l5.jpg";
import l6 from "./images/l6.jpg";
import t2 from "./images/tv2.jpg";


function Profile({reg}) {
    if(user_info.user==null && loginn.user==null ){
        alert("no user loginn")
        return (
          <>
           <div className='test'>
    <div className='user_pro '>
      <h1>GUEST</h1>
      <h2>XXXXXXXXXX</h2>
    </div>
    </div>
          </>
        )
    }
    else{
      
    if(loginn.cartt.length>0 ){
  return (
    
    <>
    {/* <div className='user_pro '>
      <h1>{loginn.user.n}</h1>
      <h2>{loginn.user.e}</h2>
    </div> */}
    <div className='test'>
    <div className='user_pro '>
      <h1>{loginn.user.n}</h1>
      <h2>{loginn.user.e}</h2>
    </div>
    <Cart cartItems={loginn.cartt}/>
    </div>
    </>
    
  )
    }
    else{
      return (
        <>
        
        <div className='test'>
        <div className='user_pro '>
      <h1>{loginn.user.n}</h1>
      <h2>{loginn.user.e}</h2>
    </div>
    <Cart cartItems={loginn.cartt}/>
    </div>
        </>
      )
    }
  }
}



const Cart = ({ cartItems }) => {
  return (
    <div className="cartt">
      <h2>Your Cart</h2>
      
<table id="customers" >
  <tr>
    <th>S no.</th>
    <th>Image</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  {cartItems.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td><img className='imgg' src={item.pro.i}/></td>
            <td>{item.pro.n}</td>
            <td>${item.pro.p}</td>
            <td>{item.quantity}</td>
          </tr>
          ))}
</table>
     
      <p className="total">Total: ${calculateTotal(cartItems)}</p>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.pro.p*item.quantity, 0);
};



export default Profile