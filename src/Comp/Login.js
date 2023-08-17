import React ,{useState,useEffect} from 'react'
import {user_info} from "./Home"
// import {reg} from "./App.js";


// export const reg=[{user:{
//   n:"Amrinder",
//   e:"sss@gmail.com",
//   p:"sss"
// },
//   cartt:[],
//   price:0}];

  

export let loginn={
  user:null,
  cartt:[],
  price:0
};

// if(user_info.user!=null){
//   loginn=user_info;
// }

export function Login({reg}) {
  console.log(reg)

    function signIN(event){
        event.preventDefault();
        let e=document.getElementById("l_email").value;
        let p=document.getElementById("l_pass").value;
        for(let i=0;i<reg.length;i++){
            if(reg[i].user.e==e && reg[i].user.p==p){
                loginn=reg[i]
                alert("Login SuccesFULL")
                return
            }
            else if(reg[i].user.e==e && reg[i].user.p!=p){
                alert("password didnt match")
                return
            }
        }
        alert("User not registered")
    }

    function signUP(event){
        event.preventDefault();
        event.preventDefault();
        let n1=document.getElementById("name").value;
        let e1=document.getElementById("email").value;
        let p1=document.getElementById("pass").value;
        reg.push({user:{n:n1,e:e1,p:p1},cartt:[],price:0})
        console.log(reg)
        alert("User registered Sucessfully")
    }

  return (
    <>
     <div className="container">
    <div className="form-container" >
      <form className="sign-in-form" onSubmit={signIN} action="/">
        <h2>Sign In</h2>
        <input id="l_email" type="email" placeholder="Email"  />
        <input id="l_pass" type="password" placeholder="Password" />
        <button  type="submit">Sign In</button>
      </form>
      <form className="sign-up-form" onSubmit={signUP}>
        <h2>Sign Up</h2>
        <input id="name"  type="text" placeholder="Full Name" required/>
        <input id="email" type="email" placeholder="Email" required/>
        <input id="pass" type="password" placeholder="Password" required/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
    </>
  )
}
