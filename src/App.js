import "./App.css";

import Header from "./components/Header";
import ProductsByCategory from "./components/ProductsByCategory";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route
            path="/category/:categoryname"
            element={<ProductsByCategory />}
          />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </>
      <Footer/>
    </div>
  );
}

export default App;
