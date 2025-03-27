import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h1 className="title">Dictionary</h1>
        <Dictionary />
      </main>
      <footer>
        {" "}
        Coded by{" "}
        <a href="https://github.com/Annika1188/Dictionary-project">
          Annika Scharkie{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
