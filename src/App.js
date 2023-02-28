import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import './app.css'



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/ecommerce" element={<Home/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/products/:id" element={<Products/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
