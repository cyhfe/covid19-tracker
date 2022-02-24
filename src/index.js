import React from "react"
import ReactDOM from "react-dom"

// import "normalize.css"
import CssBaseline from "@mui/material/CssBaseline"

import "./global.css"

import App from "./App"
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
