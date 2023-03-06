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
  const { transfers } = newState;
  const { type } = action;

  if (type === "all") {
    for (let key in newState.transfers) transfers[key] = !transfers[key];
    return newState;
  }

  if (type === "withoutTransfers") {
    transfers.withoutTransfers = !transfers.withoutTransfers;
    return newState;
  }

  return state;
};

export default reducer;
