import React from 'react';

const appContext = React.createContext({
    theme: 'white',
    toggleTheme: () => {}
});

export default appContext;
