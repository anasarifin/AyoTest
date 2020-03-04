export const getUser = data => {
  return {
    type: 'GET_USER',
    payload: data,
  };
};

export const getStats = data => {
  return {
    type: 'GET_USER_STATS',
    payload: data,
  };
};
