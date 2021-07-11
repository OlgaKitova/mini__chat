const reducer = function (state, action) {

  switch (action.type) {
    case 'ISAUTH':
      return {
          ...state,
          isAuth: true,
          userName: action.payload.userName,
          roomId: action.payload.roomId
        };
    default:
      return state;
}
}

export default reducer;
