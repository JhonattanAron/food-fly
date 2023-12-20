import Error404 from "../../containers/errors/Error404";
import Home from "./../../containers/pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";

import Menu from "../../containers/pages/Menu";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
}
