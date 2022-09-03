import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import Footer from "./compoents/Footer";
import Navb from "./compoents/Navb";
import Shop from "./compoents/Shop";

export default function App() {
  return (
    <div className="App container-fluid">
      <ToastContainer position="bottom-right" newestOnTop />
      <Navb />
      <Shop />
      <Footer />
    </div>
  );
}
