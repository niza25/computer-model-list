export const ADD_MODEL = 'ADD_MODEL';

const InitialState = [];

const reducer = (state = InitialState, action = {}) => {
  switch (action.type) {
    case ADD_MODEL:
    return [
      ...InitialState, 
      action.payload]
  default:
    return state
  }
}

export default reducer