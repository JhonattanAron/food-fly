import Footer from "./components/navigation/Footer";
import NavBarTop from "./components/navigation/NavBarTop";
import FloatButton from "./components/utils/FloatButton";
import RoutesDom from "./hocs/routes/Routes";
import "./styles/App.css";

function App() {
  return (
    <>
      <NavBarTop />
      <RoutesDom />
      <FloatButton />
      <Footer />
    </>
  );
}

export default App;
