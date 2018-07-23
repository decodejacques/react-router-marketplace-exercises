import React, { Component } from 'react';
import './App.css';



let formatSeller = (seller) => {
  return (<div className="card center">
    <div>
      <div>{seller.name}</div>
      <div>{seller.rating}</div>
    </div>
  </div>)
}

class Seller extends Component {
  render() {
    return (
      <div>{formatSeller(this.props.seller)}</div>
    );
  }
}

export default Seller;
