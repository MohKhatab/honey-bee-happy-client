import { Route, Routes, useLocation, useNavigate } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import { setNavigate } from "./utils/navigation";
import Down from "./pages/Down";
import NotFound from "./pages/NotFound";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/down" element={<Down />} />
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
