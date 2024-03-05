import reactLogo from "./assets/react.svg";
import "./App.scss";

const sayHello = () => {
  parent.postMessage({ pluginMessage: { type: "sayHello" } }, "*");
};

const App = () => {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Figma Plugin boilerplate</h1>
      <h2>Vite + React + SCSS - Figma Plugin boilerplate</h2>
      <button onClick={() => sayHello()}>Say Hello</button>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and run bun run dev
        </p>
      </div>
    </>
  );
};

export default App;
