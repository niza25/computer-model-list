import * as React from 'react';
import ModelDetails from './ModelDetails';
import { connect } from 'react-redux';

class ModelDetailsContainer extends React.Component {

  render() {
    console.log(this.props.models, 'comes from container');
    return (

      this.props.models.map(model => {
        console.log(model)
        return <ModelDetails model={model} />
      }
      )

    )
}
}

const mapStateToProps = state => {
  return {
    models: state.models
  }
}

export default connect(mapStateToProps)(ModelDetailsContainer)


