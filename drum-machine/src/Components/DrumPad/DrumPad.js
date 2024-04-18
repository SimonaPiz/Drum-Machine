import './drumPad.css';

export function DrumPad({id, name, char, src}) {
  return (
    <button 
      className="drum-pad" 
      id={id}
      onClick=''
    >
      {char}
      <audio 
        className='clip' 
        src={src}
        id={char}
        onKeyDown=''
      ></audio>
    </button>
  )
}