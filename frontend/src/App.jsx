import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="app">
      <Navbar setActivePage={setActivePage} />

      <main className="main-content">
        {activePage === "home" && <HomePage />}
        {activePage === "collection" && <CollectionPage />}
      </main>

      <Footer />
    </div>
  );
}

export default App;