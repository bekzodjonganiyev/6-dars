import React from "react";
import { Context } from "../../Context/Context";

import "./footer.css"

const Footer = () => {

    const { color } = React.useContext(Context)

    return (
        <footer className={color === "light" ? "light-mode" : "dark-mode"}>
            <h2>Footer</h2>
        </footer>
    )
}

export default Footer