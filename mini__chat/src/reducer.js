const reducer = function (state, action) {

  switch (action.type) {
    case 'ISAUTH':
      return {
          ...state,
          isAuth: true,
          userName: action.payload.userName,
          roomId: action.payload.roomId
        };
        case 'SET_USERS':
      return {
          ...state,
          users: action.payload
        };
        case 'SET_MESSAGES':
      return {
          ...state,
          messages: action.payload
        };
    default:
      return state;
}
}

export default reducer;
