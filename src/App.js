import logo from "./logo.svg";
import "./App.css";
import manga from "./assets/manga.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={manga} alt="logo" />
        <p>Put app online</p>
      </header>
    </div>
  );
}

export default App;
