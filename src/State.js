import { createContext, useReducer } from "react";
export const StateContext = createContext({});
const initialState = { wallets: [], transactions: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WALLETS":
      let w = [...state.wallets];
      w.push(action.payload);
      return { ...state, wallets: w };
    case "SET_TRANSACTIONS":
      let t = [...state.transactions];
      t.push(action.payload);
      return { ...state, transactions: t };

    default:
      return state;
  }
};
export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
