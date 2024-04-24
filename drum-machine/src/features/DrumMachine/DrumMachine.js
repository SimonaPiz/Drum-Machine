import { useSelector, useDispatch } from "react-redux";
import { Display } from "../../Components/Display/Display";
import { DrumPad } from "../../Components/DrumPad/DrumPad";
import { setDisplayText } from "./drumMachineSlice";
import { useState, useEffect } from "react";

export function DrumMachine () {
  const drums = useSelector((state) => state.drumMachine.drums);
  const drumPadItems = Array.from(drums.values());

  const displayText = useSelector((state) => state.drumMachine.displayText);
  const dispatch = useDispatch();

  const clickHandler = (name) => {
    dispatch(setDisplayText(name));
  }

  const [key, setKey] = useState('');
  const validKeys = new Set(['q','w','e','a','s','d','z','x','c']);
  document.body.addEventListener("keydown", (event) => {
    //event.preventDefault();
    console.log('press',event.key);
    if (validKeys.has(event.key)) {
      setKey(event.key);
    }
    event.stopPropagation();
  })

  useEffect(() => {
    if (validKeys.has(key)) {
      let drum = Object.values(drums.find((item => Object.hasOwn(item, key))))[0];
      console.log('key change in',drum.name)
      dispatch(setDisplayText(drum.name));
    }
  }, [key]);

  return (
    <div id="drum-machine">
      <h1>
        Drum Machine 
        <i className="fa-solid fa-drum icon"></i>
      </h1>
      <div id="pads-container">
        {
          drums.map(drum => {
            drum = Object.values(drum)[0];
            return <DrumPad 
              key={drum.id}
              id={drum.id}
              char={drum.char}
              name={drum.name}
              src={drum.url}
              clickHandler={clickHandler}
            />
          })
        }
      </div>
      <Display text={displayText} />
    </div>
  );
}