class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ServerError';
  }
}

export const loadTickets = (dispatch) => async () => {
  try {
    const responseId = await fetch('https://aviasales-test-api.kata.academy/search');
    const bodyId = await responseId.json();
    const searchId = bodyId.searchId;

    const getTickets = async (searchId) => {
      const responseTickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      if (responseTickets.status === 500) {
        getTickets(searchId);
        throw new ServerError('need refrash');
      }
      const bodyTickets = await responseTickets.json();
      const ticketsArr = bodyTickets.tickets;
      dispatch({ type: 'loadTickets', ticketsData: ticketsArr });
      if (!bodyTickets.stop) {
        getTickets(searchId);
      } else {
        dispatch({ type: 'LOADED' });
      }
    };
    getTickets(searchId);
  } catch (err) {
    console.error(err.name);
  }
};
