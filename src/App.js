import Footer from "./components/navigation/Footer";
import NavBarTop from "./components/navigation/NavBarTop";
import FloatButton from "./components/utils/FloatButton";
import RoutesDom from "./hocs/routes/Routes";
import "./styles/App.css";

function App() {
  return (
    <div className="bg-chef">
      <NavBarTop />
      <RoutesDom />
      <FloatButton />
      <Footer />
    </div>
  );
}

export default App;
