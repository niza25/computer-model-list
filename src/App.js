import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Select from './components/Select';
import { addModel } from './actions/addModel';


class App extends Component {

  state = {
    value: '',
    computers: {
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
    this.setState({ value: event.target.value })
    console.log(event.target.value, 'comes from event on select')
  }

  addModelToStore = () => {
    // somehow takes the value, searches in local state and returns object
    console.log(this.state.computers[this.state.value])
    this.props.addModel(this.state.computers[this.state.value])
  }

  render() {
    return (
      <div className="App">
        <Select computers={this.state.computers} handleChange={this.updateSelection} />
        <button onClick={this.addModelToStore} > Add Model </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    models: state.models
  }
}

export default connect(mapStateToProps, { addModel })(App)

