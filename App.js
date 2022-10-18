import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurMenu from "./pages/OurMenu";
import MenuDetails from "./pages/MenuDetails";
import Experience from "./pages/Experience";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/menu" exact element={<OurMenu />} />
          <Route path="/experience" exact element={<Experience />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/menu/:id" exact element={<MenuDetails />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
