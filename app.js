import React from "react"

import { createRoot } from "react-dom/client"

const root= createRoot(document.getElementById("root"));

const Header= () => {
     return(
          <h1>This is Header</h1>
     )
}

     root.render(<Header/>);