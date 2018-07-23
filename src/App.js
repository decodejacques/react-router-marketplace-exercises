import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';

let initialItems = [{
  description: "Nice boats. 50% off. wow.",
  price: 10000,
  image: "boat.png",
  sellerId: 0
}, {
  description: "Lawn chairs",
  price: 50,
  image: "lawnchair.jpg",
  sellerId: 1
}
]

let initialSellers = [{
  name: "Jack Frost",
  rating: "5 stars"
}, {
  name: "Hank Green",
  rating: "2 stars"
}
]



class App extends Component {
  constructor() {
    super()
    this.renderAllItems = this.renderAllItems.bind(this)
    this.renderSeller = this.renderSeller.bind(this)
    this.state = {
      items: initialItems,
      sellers: initialSellers
    }
  }
  renderAllItems() {
    return this.state.items.map(item =>
      (<Item
        price={item.price}
        sellerId={item.sellerId}
        imageLocation={item.image}
        description={item.description} />))
  }
  renderSeller(routerData) {
    // the .id in params.id is the same as the :id from the Route below.
    // (do you see the path='/seller/:id' ?)
    // it is a number and represents the index in the seller array referred to by
    // this.state.sellers
    let sellerId = routerData.match.params.id
    let renderedSeller = this.state.sellers[sellerId]
    return (<Seller seller={renderedSeller} />)
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={this.renderAllItems} />
          <Route exact={true} path='/seller/:id' render={this.renderSeller} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
