import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./store/store"
import "./styles/style.scss"

import App from "./App"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
)

if (module.hot) {
  module.hot.accept()
}
