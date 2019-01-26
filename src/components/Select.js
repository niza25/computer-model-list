import React, { Component } from 'react';

export default class Select extends React.Component {

  render() {
    return (
      
      <select id="computer-select">
        <option value=''>--Pick a model--</option>
        {
          Object.keys(this.props.computers).map((key, i) => {
            return <option
            value={key}
            key={'comp' + i}>
              {key} ({this.props.computers[key].year})
            </option>
          })
        }
      </select>
    )
  }


}