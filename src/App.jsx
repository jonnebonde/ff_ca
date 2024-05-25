import { Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header />} >
        <Route index element={<h1>Home</h1>} />
        <Route path="/:id" element={<h1>Specific product</h1>} />
        <Route path="checkout" element={<h1>checkout</h1>} />
        <Route path="checkoutSuccess" element={<h1>Checkout success</h1>} />
        <Route path="contact" element={<h1>contact</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      </Routes>
    </>
  );
}
