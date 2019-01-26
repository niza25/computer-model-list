import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';



class App extends Component {
  
  render() {
    console.log(this.props, 'my props - state in app')
    console.log(this.props.computers)
    const modelsList = Object.keys(this.props.computers)
    console.log(modelsList);

    return (
      
      <div className="App">      
      <form >
        <label>Choose a model:</label>
            <select id="computer-select">
              <label>
                <option value="">--Pick a model--</option>
              </label>
                
                {console.log(modelsList)}

                { modelsList.map((model, i )=>  
                  (
                    <option value={model} key={'comp' + i}> {model}</option>
                   ))}
            </select>
        <button>Add</button>
        </form>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    computers: state
  }
}

export default connect(mapStateToProps)(App)
