import "./App.css";
import { Navbar } from "./components/Navbar";
import { Topbar } from "./components/Topbar";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Topbar />
      <Home />
    </>
  );
}

export default App;
