const reducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'saveContent': {
      return {
        ...state,
        content: action.payload,
      }
    }
    case 'saveText': {
      return {
        ...state,
        text: action.payload,
      }
    }

    default:
      break
  }
}

export default reducer
