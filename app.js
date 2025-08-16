import React from "react"

import { createRoot } from "react-dom/client"

const root= createRoot(document.getElementById("root"));

const Header= () => {
     return(
          <h1>This is Header</h1>
     )
}

const Footer= () => {
     return <h2>This is Footer</h2>
}
const Body= () => {
     return <h2>This is Body</h2>
}

const App=()=>{
     return (
          <>
          <Header/>
          <Body/>
          <Footer/>
          </
          
     )
}
     root.render(<App/>);