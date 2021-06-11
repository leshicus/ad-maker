const reducer = (state, action) => {
  // console.log('reducer payload', action.payload)

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
        content: action.payload,
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
    case 'changeTheme': {
      return {
        ...state,
        theme: {
          ...state.theme,
          [action.payload.id]: action.payload.value
        },
      }
    }

    default:
      break
  }
}

export default reducer
