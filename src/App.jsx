import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/home/Home";
import Doctors from "./pages/doctors/Doctors";
import Departments from "./pages/departments/Departments";
import DoctorProfile from "./pages/doctors/DoctorProfile";
import Hospital from "./pages/hospital/Hospital";
import Pharmacy from "./pages/pharmacy/Pharmacy";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import Skincare from "./pages/skincare/Skincare";
import Laboratory from "./pages/laboratory/Laboratory";
import PatientPortal from "./pages/patient/PatientPortal";
import Admin from "./pages/admin/Admin";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import About from "./pages/about/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EE] text-[#242321]">

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route
            path="/doctors/:id"
            element={<DoctorProfile />}
          />

          <Route path="/departments" element={<Departments />} />

          <Route path="/hospital" element={<Hospital />} />

          <Route path="/pharmacy" element={<Pharmacy />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route path="/skincare" element={<Skincare />} />

          <Route path="/laboratory" element={<Laboratory />} />

          <Route
            path="/patient-portal"
            element={<PatientPortal />}
          />

          <Route path="/admin" element={<Admin />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;