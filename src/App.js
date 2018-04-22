import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';

let items = [{
  description: "Nice boats. 50% off. wow.",
  price: 10000,
  image: "boat.png",
  sellerId: 0
},
{
  description: "Lawn chairs",
  price: 50,
  image: "lawnchair.jpg",
  sellerId: 1
}
]

let renderAllItems = () => {
  return items.map(item => (<Item
    price={item.price}
    sellerId={item.sellerId}
    imageLocation={item.image}
    description={item.description} />))
}

let renderSeller = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Seller id={routerData.match.params.id} />)

}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/seller/:id' render={renderSeller} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
