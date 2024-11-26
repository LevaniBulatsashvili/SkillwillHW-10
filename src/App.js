import "./App.css";

function App() {
  let randomImgId = Math.ceil(Math.random() * 200);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`https://picsum.photos/id/${randomImgId}/250/250`}
          className="App-logo"
          alt="logo"
        />
        <h1>Levan Bulatsashvili</h1>
        <h2>
          <span>React</span> Developer
        </h2>
        <p>Refresh the page for a random image! (up to 200)</p>
      </header>
    </div>
  );
}

export default App;
