import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./compenent/Home";
import { useNavigate } from "react-router-dom";
import Gallery from "./compenent/Gallery";
import Register from "./compenent/Register";
import { useState } from "react";
import CartContext from "./context/CartContext";
import Add from "./compenent/Add";
export default function App() {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  return (
    <CartContext.Provider value={{ items, setItems }}>
      <div className="container">
        {showCart ? <Add />: null}
        <div className="header">
          <Link to="/" target="_blank" className="logo link">
            Shopping
          </Link>
          <ul>
            <Link to="/" target="_blank" className="link">
              Home
            </Link>
            <Link to="/compenent/Gallery" target="_blank" className="link">
              Add to Cart
            </Link>
            <Link to="/compenent/Register" target="_blank" className="link">
              Register
            </Link>
            <button onClick={() => setShowCart((current) => !current)}>
              <i class="bi bi-cart"></i> <span>{items.length}</span>
            </button>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compenent/Gallery" element={<Gallery />} />
          <Route path="/compenent/Register" element={<Register />} />
        </Routes>
        <div className="footer">All Right Reserved Copyright 2012 &copy;</div>
      </div>
    </CartContext.Provider>
  );
}
