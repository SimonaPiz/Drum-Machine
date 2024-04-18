import { Display } from "./Components/Display/Display";
import { DrumPad } from "./Components/DrumPad/DrumPad";

function App() {
  return (
    <div id="drum-machine">
      <h1>
        Drum Machine 
        <i class="fa-solid fa-drum icon"></i>
      </h1>
      <div id="pads-container">
        <DrumPad />
        <DrumPad />
        <DrumPad />
      </div>
      <Display />
    </div>
  );
}

export default App;
