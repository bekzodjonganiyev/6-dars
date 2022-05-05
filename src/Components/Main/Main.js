import React from "react";
import { Context } from "../../Context/Context";

import "./main.css"

const Main = () => {

    const { color } = React.useContext(Context)

    return (
        <main className={color === "light" ? "light-mode" : "dark-mode"}>
         <h2>Main</h2>
        </main>
    )
}

export default Main