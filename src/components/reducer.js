const reducer = (state, action) => {
  console.log('reducer payload', action.payload)

  switch (action.type) {
    case 'saveQuestions': {
      return {
        ...state,
        questions: { ...state.questions, ...action.payload },
      }
    }
    case 'saveContent': {
      return {
        ...state,
        content: action.paylod,
      }
    }
    case 'saveText': {
      return {
        ...state,
        text: {
          ...state.text,
          ...action.payload,
        },
      }
    }

    default:
      break
  }
}

export default reducer
