import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const routes = ROUTES.map(({ path, Component }) => {
    return <Route path={path} element={<Component />} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Routes>{routes}</Routes>
      <Footer />
    </div>
  );
}

export default App;
