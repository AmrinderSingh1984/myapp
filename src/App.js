import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Comp/Layout";
import {Home} from "./Comp/Home";
import About from "./Comp/About";
import Profile from "./Comp/Profile";
import {Login} from "./Comp/Login";

export const reg=[{user:{
  n:"Amrinder",
  e:"sss@gmail.com",
  p:"sss"
},
  cartt:[],
  price:0}
];

  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home Reg={reg} />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login reg={reg}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
