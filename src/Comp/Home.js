// import React from 'react';
import React, { useState ,useEffect} from 'react';
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
import {loginn} from "./Login"
// import {reg} from "./App.js"




export let user_info=loginn;



// console.log(reg)
// console.log(loginn)


export const arr=[
  {id:0,i:m1,n:"GAlaxy A50",b:"SAMSUNG",p:109.75,type:"Smartphone"},
  {id:1,i:m5,n:"LED M12",b:"SAMSUNG",p:151.25,type:"TV"},
  {id:2,i:l2,n:"Mac 14",b:"APPLE",p:139.50,type:"Laptop"},
  {id:3,i:m4,n:"B 21",b:"OPPO",p:208.25,type:"Smartphone"},
  {id:4,i:l3,n:"M1x40",b:"DELL",p:136.75,type:"Laptop"},
  {id:5,i:t2,n:"LCD A12",b:"I BALL",p:190.00,type:"TV"},
  {id:6,i:m1,n:"GAlaxy A30",b:"SAMSUNG",p:202.25,type:"Smartphone"},
  {id:7,i:m2,n:"F 19",b:"OPPO",p:344.75,type:"Smartphone"},
  {id:8,i:l1,n:"X50",b:"ASUS",p:125.50,type:"Laptop"},
  {id:9,i:l4,n:"WZ12X",b:"HP",p:256.50,type:"Laptop"}
]
// export default arr;

export function Home(props) {
  let k=0;

    for(let i=0;i<props.Reg.length;i++){
    if(loginn.user!=null){
    if(props.Reg[i].user.e==loginn.user.e && props.Reg[i].user.p==loginn.user.p){
        k=i;
    }
  }
  }
  let clicked=0;
  let [count,setc]=useState(0);
  let [total,set_total]=useState(0);
  const [cart,updateCart]=useState(props.Reg[k].cartt)
  const [arr2,setarr2]=useState(arr)
  const [arr3,setarr3]=useState(arr2)
  let [tad,set_tad]=useState(0)
  const [selectedRadioOption, setSelectedRadioOption] = useState(null);
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState([]);

  console.log(props.Reg[k])

  useEffect(()=>{
    const c=[...cart]
    let t=0;
    for(let i=0;i<c.length;i++){
      t=t+c[i].pro.p*c[i].quantity;
      }
    set_total(t);
    console.log([...arr2])
    if(loginn.user!=null){
    props.Reg[k].cartt=cart;
    props.Reg[k].price=t;
    user_info=props.Reg[k];

    }
    },[cart,arr2])

  // const dis=[
  //   {shoping:700,disc:3},
  //   {shoping:1100,disc:7},
  //   {shoping:1300,disc:10},
  //   {shoping:1800,disc:13},
  //   {shoping:2200,disc:17},
  //   {shoping:2900,disc:25},
  // ]
  function side_cart(){
    setc(0)
    const c=document.getElementById("cart");
    const m=document.getElementById("main");
    m.style.width="85%";
    c.style.right=0;
  }
  function close(){
    const c=document.getElementById("cart");
    const m=document.getElementById("main");
    // m.style.width="100%";
    c.style.right="-340px";
  }
  function remove(id){
    const c=[...cart]

    for(let i=0;i<c.length;i++){
      if(id==cart[i].pro.id){
        c.splice(i,1);
        updateCart(c)
        return;
      }
    }
  }
  function increse(id){
    const c=[...cart]

    for(let i=0;i<c.length;i++){
      if(id==cart[i].pro.id){
        c[i].quantity++;
        updateCart(c)
        return;
      }
    }
  }
  function decrese(id){
    const c=[...cart]

    for(let i=0;i<c.length;i++){
      if(id==cart[i].pro.id){
        if(c[i].quantity<2){
          c.splice(i,1);
          updateCart(c)
          return;
        }
        c[i].quantity--;
        updateCart(c)
        return;
      }
    }
  }
  function add(id){
    if(loginn.user==null){
      alert("SignIN first")
      return
    }
    const c=[...cart]

    for(let i=0;i<c.length;i++){
      if(id==cart[i].pro.id){
        c[i].quantity++;
        updateCart(c)
        return;
      }
    }
    setc(count+1)


    let arr_item={
      pro:arr[id],
      quantity:1
    }
    c.push(arr_item)
    updateCart(c)
    console.log(cart);
  }

  // function checkout(){
  //   if(clicked==1){
  //     return
  //   }
  //   for(let i=0;i<dis.length;i++){
  //     if(dis[i].shoping>=total && i>0){
  //       let d=total-(dis[i-1].disc/100)*total;
  //       set_tad(dis[i].disc)
  //       loginn.price=d;
  //       set_total(d)
  //       console.log(loginn.price)
  //       clicked=1
  //       return
  //     }
  //   }
  //   let d=total-0.25*total;
  //       set_tad(25)
  //       set_total(d)
  //   loginn.price=d
  //   clicked=1
  //   console.log(loginn.price)
  // }
  let items=[{value:"Smartphone" ,label:"Smartphone"},
  {value:"Laptop",label:"Laptop"},
  {value:"TV",label:"TV"}
]
  let prices=[{value:"150",label:"150"},{value:"200",label:"200"},{value:"250",label:"250"},{value:"300",label:"300"},{value:"400",label:"All"}]

  const handleRadioChange = event => {
    let a=[...arr3]
    let a2=[]
    setSelectedRadioOption(event.target.value)
    let v=parseInt(event.target.value)
    if(a.length==arr.length){
    for(let i=0;i<arr.length;i++){
        if(arr[i].p<=v){
          a2.push(arr[i])
        }
      }

      setarr2(a2)
      return
    }
    else{
      for(let i=0;i<a.length;i++){
        if(a[i].p<=v){
          a2.push(a[i])
        }
      }

      setarr2(a2)
    }
  };

  const handleCheckboxChange = event => {
    let a=[...selectedCheckboxOptions];
    let a2=[]
    let b=1;
    const value = event.target.value;
    for(let i=0;i<a.length;i++){
      if(a[i]==value){
        a.splice(i,1)
        b=0;
        break;
      }
    }
    if(b){
      a.push(value)
    }

    for(let i=0;i<arr.length;i++){
      for(let j=0;j<a.length;j++){
        if(arr[i].type==a[j]){
          a2.push(arr[i])
        }
      }
    }
    setarr2(a2)
    setarr3(a2)
    console.log(a);
    if (selectedCheckboxOptions.includes(value)) {
      setSelectedCheckboxOptions(selectedCheckboxOptions.filter(option => option !== value));
    } else {
      setSelectedCheckboxOptions([...selectedCheckboxOptions, value]);
    }
    if(a.length==0){
      setarr2(arr)
    }
  };

  
  return (
    <>
    <Filter checkboxOptions={items} radioOptions={prices} selectedCheckboxOptions={selectedCheckboxOptions} selectedRadioOption={selectedRadioOption} handleCheckboxChange={handleCheckboxChange} handleRadioChange={handleRadioChange}/>

    <div className='main' id="main">
     

      {[...arr2].map((p)=>{return (<div class="card">
        <Product key={p.id} image={p.i} brand={p.b} name={p.n} price={p.p}/>
        <p><button onClick={()=>add(p.id)}>Add to Cart</button></p>
</div>)
        } )}
    </div>
    <button className='cart' onClick={side_cart}>CART <sup><strong>{count}</strong></sup></button>
    <div className="side-cart" id='cart'>
    <div className="cart-header">
      <h2>Shopping Cart</h2>
      <button class="close-btn" onClick={close}>&times;</button>
    </div>
    <div className="cart-items">
      {cart.map((p)=>{ 
        return (<div className='cart-item'><Cart_items image={p.pro.i} name={p.pro.n} brand={p.pro.b} price={p.pro.p} />
        <div className="quantity">
      <button className="quantity-btn minus-btn"onClick={()=>decrese(p.pro.id)}>-</button>
      <span className="quantity-value">{p.quantity}</span>
      <button className="quantity-btn plus-btn" onClick={()=>increse(p.pro.id)}>+</button>
    </div>
  <button className="remove-btn" onClick={()=>remove(p.pro.id)}>Remove</button>
  </div>
        )
        })}
      </div>
    <div className="cart-footer">
      <p>Total: ${total}</p>
      {/* <p >Total_After_Discount: ${tad}</p> */}
      {/* <button className="checkout-btn" onClick={()=>checkout()}>Checkout</button> */}
    </div>
  </div>
    
    </>
  )
}

function Product(props){
  return (
    <>
  <img src={props.image} height="60%" width="60%" className='image'/>
  <h3 className="name">{props.brand} {props.name}</h3>
  <p class="price">{props.price} $</p>
  <p  class="detail">{props.detail}</p>
    </>
  )
}

function Cart_items(props){

  return(
<div className='cart-item'>
  <div className="product-details">
  <img src={props.image} alt="Product Name" />
    <h3>{props.brand} <br></br>{props.name}</h3>
    <p>Price: {props.price}$</p>
  </div>
  </div>
      
  )
}

function Filter(props){
  return(
    <>
    <div className="filter-menu">
        <h2>Filter Menu</h2>
        
        <div className="filter-section">
            <h3>Category {props.selectedCheckboxOptions}</h3>
            <CheckboxFilter
        options={props.checkboxOptions}
        selectedOptions={props.selectedCheckboxOptions}
        onChange={props.handleCheckboxChange}
      />
          
        </div>
        
        <div className="filter-section">
            <h3>Price {props.selectedRadioOption}</h3>
            <RadioButtonFilter
        options={props.radioOptions}
        selectedOption={props.selectedRadioOption}
        onChange={props.handleRadioChange}
      />
           </div>
    </div>
    </>
  )
}

const RadioButtonFilter = ({ options, selectedOption, onChange }) => {
  return (
    <div>
      {options.map(option => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};



const CheckboxFilter = ({ options, selectedOptions, onChange }) => {
  return (
    <div>
      {options.map(option => (
        <label key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

