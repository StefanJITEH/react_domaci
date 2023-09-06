import React from 'react';


import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main";
import Order from "./components/Order";
import { useEffect, useState } from 'react'
import Search from "./components/Search";

function App() {
  const [data, ] = useState([
    {
      id: 1,
      name: "Pepsi",
      ordered: false,
      price: 5,
    },
    {
      id: 2,
      name: "Coca Cola",
      ordered: false,
      price: 8,
    },
    {
      id: 3,
      name: "Red Bull",
      ordered: false,
      price: 15,
    },
    {
      id: 4,
      name: "Jack Daniels",
      ordered: false,
      price: 25,
    },
    {
      id: 5,
      name: "Moet",
      ordered: false,
      price: 35,
    },
    {
      id: 6,
      name: "Proseco",
      ordered: false,
      price: 45,
    },
  ]);

  // const [order, setOrder] = useState([]);
  const [order, setOrder] = useState([]);
  const [price, setPrice] = useState(0);

  function addOrder(drink){
    if (!order.some(item => item.id === drink.id)) {
      setOrder([...order, drink]);
      setPrice(price + drink.price);
    }
  }

  function removeOrder(drink) {
    setOrder(order.filter(item => item.id !== drink.id));
    setPrice(price - drink.price);
  }

  const [name, setName] = useState('');

  const [showData, setShowData] = useState(data);

  useEffect(() => {
    let temp = data.filter((drink) => drink.name.includes(name))
    setShowData(temp)
  }, [name]);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar price={price}/>
        <Search name={name} setName={setName}/>
        <div className="body">
          <Routes>
          <Route path="/" element={<Main data={showData} change={addOrder} isOrder={false}/>}/>
            <Route path="/main" element={<Main data={showData} change={addOrder} isOrder={false}/>}/>
            <Route path="/myorder" element={<Order order={order} change={removeOrder} isOrder={true}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
