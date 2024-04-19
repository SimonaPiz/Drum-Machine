import { Display } from "../../Components/Display/Display";
import { DrumPad } from "../../Components/DrumPad/DrumPad";


export function DrumMachine ({drums}) {
  return (
    <div id="drum-machine">
      <h1>
        Drum Machine 
        <i class="fa-solid fa-drum icon"></i>
      </h1>
      <div id="pads-container">
        {
          drums.map(drum => <DrumPad 
            id={drum.id}
            char={drum.char}
            name={drum.name}
            src={drum.src}
          />)
        }
      </div>
      <Display text='display' />
    </div>
  );
}