import React from "react";
import { Context } from "../../Context/Context";

import "./header.css"

const Header = () => {

    const { color, setColor } = React.useContext(Context)
    return (
        <>
            <select onChange={evt => setColor(evt.target.value)}>
                <option>light</option>
                <option>dark</option>
            </select>

            <header className={color === "light" ? "light-mode" : "dark-mode"}>
                <h2>Header</h2>
            </header>
        </>
    )
}

export default Header