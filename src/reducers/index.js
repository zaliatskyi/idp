const initialState = {
  playerName: 'Guest',
  playersNumber: 3
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        playerName: action.name,
        playersNumber: action.players
      };
    default:
      return state;
  }
};

export default reducer;
