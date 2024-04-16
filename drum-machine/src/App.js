import { Display } from "./Components/Display/Display";

function App() {
  return (
    <div id="drum-machine">
      <h1>
        Drum Machine 
        <i class="fa-solid fa-drum icon"></i>
      </h1>
      <div id="pads-container"></div>
      <Display />
    </div>
  );
}

export default App;
