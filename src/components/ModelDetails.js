import * as React from 'react';
import PropTypes from 'prop-types';

const ModelDetail = (props) => {

  return (
    <div>
      <ul>
        <li> Name: {props.model.name}</li>
        <li> Manufacturer: {props.model.manufacturer}</li>
        <li> Year: {props.model.year}</li>
        <li> Origin: {props.model.origin}</li>
      </ul>
    </div>
  )
}

ModelDetail.propTypes = {
  model: PropTypes.shape({
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    year: PropTypes.number,
    origin: PropTypes.string
  })
}

export default ModelDetail
