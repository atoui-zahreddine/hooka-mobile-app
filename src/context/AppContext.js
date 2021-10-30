import React, { createContext } from 'react';

export const initialState = {
  user: null,
  auth: { loading: false, token: null, error: null },
};

const AppContext = createContext(initialState);

export default AppContext;
