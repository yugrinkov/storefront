import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Category from "./pages/category/Category";
import Cart from "./pages/cart/Cart";
import Product from "./product/Product";
import Header from "./pages/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Route exact path="/" component={Category} />
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:id" component={Product}/>
      </div>
    );
  }
}

export default App;
