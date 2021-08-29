import React, { createContext, useState } from 'react';

export const UIContext = createContext();

export const UIContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);

    return (
        <UIContext.Provider value={{loading, setLoading}}>
            {children}
        </UIContext.Provider>
    );
};

export default UIContextProvider;