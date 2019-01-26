import React, { Component } from 'react';

export default class Select extends Component {

  render() {
    return (
  
      <select onChange = {this.props.handleChange} id="computer-select">
        <option value=''>--Pick a model--</option>
        {
          Object.keys(this.props.computers).map((key, i) => {
            return <option
            value={key}
            key={'computer' + i}>
              {key} ({this.props.computers[key].year})
            </option>
          })
        }
      </select>
    )
  }
}