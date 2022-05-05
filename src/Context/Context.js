import React from "react";

const Context = React.createContext()

function SelectTheme({ children }) {

    const [color, setColor] = React.useState("light");

    return (
        <Context.Provider value={{ color, setColor }}>
            {children}
        </Context.Provider>
    )
}

export { Context, SelectTheme }