import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <HomePage />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;