import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Portfolio from "./components/Portfolio/Portfolio.js"
import NavBar from "./components/NavBar/NavBar.js"
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <NavBar />
      <Portfolio />
      <Footer />
     
    </div>
  );
}

export default App;
