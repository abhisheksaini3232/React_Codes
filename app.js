import React from "react"

import { createRoot } from "react-dom/client"

const root= createRoot(document.getElementById("root"));
     const heading= React.createElement("h1",{},"Hey Bro You did it");

     root.render(heading);