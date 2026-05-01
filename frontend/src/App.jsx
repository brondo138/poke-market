import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <HomePage />
      </main>
    </div>
  );
}

export default App;