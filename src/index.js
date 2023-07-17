import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Pizza />
    </div>
  );
}
//component
function Pizza() {
  return <h1>this is spizza</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
