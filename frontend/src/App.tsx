import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import Button from "./components/Button";
import { ButtonContainer } from "./style";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <ButtonContainer>
          <Link to="/">
            <Button>Shop</Button>
          </Link>
          <span style={{ margin: "0 10px", color: "#ccc" }}>|</span>
          <Link to="/cart">
            <Button>Shopping Cart</Button>
          </Link>
        </ButtonContainer>

        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
