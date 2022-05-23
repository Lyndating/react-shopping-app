import React, {createContext, useContext, useReducer} from 'react';

//data prepare
export const StateContext = createContext();

//data provider
export const StateProvider = ({reducer, initialState, children}) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
};

//data pull
export const useStateValue = () => useContext(StateContext);

