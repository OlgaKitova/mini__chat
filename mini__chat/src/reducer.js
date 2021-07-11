const reducer = function (state, action) {

  switch (action.type) {
    case 'ISAUTH':
      return {
          ...state,
          isAuth: action.payload,
        };
    default:
      return state;
}
}

export default reducer;
