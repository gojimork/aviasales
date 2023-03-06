const initialState = {
  transfers: {
    all: false,
    withoutTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  priorities: {
    cheapest: true,
    quickest: false,
    optimal: false,
  },
};

const reducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === "all") {
    for (let key in newState.transfers)
      newState.transfers[key] = !newState.transfers[key];
    return newState;
  }

  return state;
};

export default reducer;
