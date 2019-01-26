import React, { Component } from 'react';
import './App.css';
import Select from './components/Select';


export default class App extends Component {

  state = {
    value: '',
    computers:{
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }
}

  updateSelection = (event) => {
      this.setState({value: event.target.value})
      console.log(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <Select computers = {this.state.computers} handleChange = {this.updateSelection}/>
      </div>
    )
  }
}

