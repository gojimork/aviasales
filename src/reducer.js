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

  const checkAllBox = () => {
    const { withoutTransfers, oneTransfer, twoTransfers, threeTransfers } =
      transfers;
    if (withoutTransfers && oneTransfer && twoTransfers && threeTransfers) {
      transfers.all = true;
      console.log(3);
    }
  };

  if (type === "all" && transfers.all === false) {
    for (let key in newState.transfers) transfers[key] = true;
    return newState;
  } else if (type === "all" && transfers.all === true) {
    for (let key in newState.transfers) transfers[key] = false;
    return newState;
  }

  if (type === "withoutTransfers") {
    transfers.withoutTransfers = !transfers.withoutTransfers;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }

  if (type === "oneTransfer") {
    transfers.oneTransfer = !transfers.oneTransfer;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }

  if (type === "twoTransfers") {
    transfers.twoTransfers = !transfers.twoTransfers;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }

  if (type === "threeTransfers") {
    transfers.threeTransfers = !transfers.threeTransfers;
    if (transfers.all) transfers.all = false;
    checkAllBox();
    return newState;
  }

  return state;
};

export default reducer;
