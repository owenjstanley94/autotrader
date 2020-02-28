import React, { Component } from 'react';
import fiat500Photo from './img/fiat500.jpg';
import kiaCeedPhoto from './img/kiaCeed.jpg';
import audiQ8Photo from './img/audiQ8.jpg';
import suzukiIgnisPhoto from './img/suzukiIgnis.jpg';
import Listing from './components/Listing';

import './App.css';

class App extends Component {

  state = {
    listings: [
      {photo: fiat500Photo, car: "Fiat 500 1.0 MHEV Lounge (s/s) 3dr", description: "3 door Manual Petrol Hatchback", rrp: "£14,745", saving: "£2,955", price: "£11,790", stock: "BRAND NEW - IN STOCK"},
      {photo: kiaCeedPhoto, car: "KIA Ceed 1.0 T-GDi ECO 2 (s/s) 5dr", description: "5 door Manual Petrol Hatchback", rrp: "£18,850", saving: "£1,508", price: "£17,342", stock: "BRAND NEW - IN STOCK"},
      {photo: audiQ8Photo, car: "Audi Q8 3.0 TDI V6 50 Vorsrung Tiptronic quattro (s/s) 5dr", description: "5 door Automatic Diesel SUV", rrp: "£88,055", saving: "£11,467", price: "£76,588", stock: "BRAND NEW - IN STOCK"},
      {photo: suzukiIgnisPhoto, car: "Suzuki Ignis 1.2 Dualjet SHVS SZ5 ALLGRIP (s/s) 5dr", description: "5 door Manual Hybrid - Petrol/Electric Hatchback", rrp: "£17,214", saving: "£2,000", price: "£15,214", stock: "BRAND NEW - IN STOCK"},
    ]
}



    render(){
      const eachListing = this.state.listings.map((listings, index) => {
        return <Listing key = {index} photo = {listings.photo} car = {listings.car} description = {listings.description} rrp = {listings.rrp} saving = {listings.saving} price = {listings.price} stock = {listings.stock} />
      })
      return (
        <div className="App">
          <h1>Latest brand new car deals</h1>
          <div id = "allCards">{eachListing}</div>
        </div>
      );
    }
  }

export default App;
