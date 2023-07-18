import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>fast react Pizza co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula,and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Finghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={20}
      />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>{new Date().toLocaleTimeString()}. We are open.</p>
    </footer>
  );
}
//components
function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
