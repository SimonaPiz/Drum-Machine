import { useSelector, useDispatch } from "react-redux";
import { Display } from "../../Components/Display/Display";
import { DrumPad } from "../../Components/DrumPad/DrumPad";
import { setDisplayText } from "./drumMachineSlice";

export function DrumMachine () {
  const drums = useSelector((state) => state.drumMachine.drums);
  const displayText = useSelector((state) => state.drumMachine.displayText);
  const dispatch = useDispatch();

  const clickHandler = (name, id) => {
    dispatch(setDisplayText(name));
    let drumToPlay = document.getElementById(id);
    drumToPlay.play();
  }

  const validKeys = new Set(['q','w','e','a','s','d','z','x','c']);
  
  document.body.addEventListener("keydown", (event) => {
    event.preventDefault();
    let key = event.key;
    //console.log('press',key);
    
    if (validKeys.has(key)) {
      let drum = drums.find((item => item.key === key));
      //console.log('key change in',drum.name);
      dispatch(setDisplayText(drum.name));
      let drumToPlay = document.getElementById(key.toUpperCase());
      drumToPlay.play();
    }
        
    event.stopImmediatePropagation();
  });

  return (
    <div id="drum-machine">
      <h1>
        Drum Machine 
        <i className="fa-solid fa-drum icon"></i>
      </h1>
      <div id="pads-container">
        {
          drums.map(drum => <DrumPad 
            key={drum.key}
            id={drum.id}
            char={drum.char}
            name={drum.name}
            src={drum.url}
            clickHandler={clickHandler}
          />
          )
        }
      </div>
      <Display text={displayText} />
    </div>
  );
}