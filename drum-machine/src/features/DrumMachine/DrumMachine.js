import { useSelector, useDispatch } from "react-redux";
import { Display } from "../../Components/Display/Display";
import { DrumPad } from "../../Components/DrumPad/DrumPad";
import { setDisplayText } from "./drumMachineSlice";

export function DrumMachine ({drums}) {
  const displayText = useSelector((state) => state.drumMachine.displayText);
  const dispatch = useDispatch();

  const clickHandler = (name) => {
    dispatch(setDisplayText(name));
  }

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
            clickHandler={clickHandler}
          />)
        }
      </div>
      <Display text={displayText} />
    </div>
  );
}