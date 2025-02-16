import { useState } from "react";
import Content from "./contentbox";
import Login from "./login";

function Inputfield (){
    return(
        <div className="flex flex-wrap gap-18">
            <Content/>
            <Login/>
        </div>
    )
}

export default Inputfield;