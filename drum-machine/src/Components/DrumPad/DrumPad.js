import './drumPad.css';

export function DrumPad({id, name, char, src, clickHandler}) {
  return (
    <button 
      className="drum-pad" 
      id={id}
      onClick={() => clickHandler(name, char)}
    >
      {char}
      <audio 
        className='clip' 
        src={src}
        id={char}
      ></audio>
    </button>
  )
}