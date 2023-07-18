import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="bg-slate-300">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
