export const ADD_MODEL = 'ADD_MODEL'

export function addModel(objModel) {
  return {
    type: ADD_MODEL,
    payload: objModel
  }
}