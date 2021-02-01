import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { choice, remove } from "./helpers";
import fruits from "./foods";

const randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go, one ${randomFruit}`);
console.log(`Delicious! May I have another?`);

remove(fruits, randomFruit);

console.log(`I'm sorry, we're all out. We have ${fruits} left`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
