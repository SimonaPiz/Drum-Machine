# Drum Machine
A Drum Machine app
> <img src="https://github.com/SimonaPiz/Drum-Machine/assets/91121660/af305d32-e69e-41da-8e56-2beba880f63e" width="20px" alt="icon freecodecamp"> ***FreeCodeCamp certification project***

<img src="https://github.com/SimonaPiz/Drum-Machine/assets/91121660/513d3bd6-a3b7-45ab-9747-c4d3ea3da116" width="400px" alt="preview" title="preview">

## Links

- ➡ Solution URL: [Repo GitHub SimonaPiz/](https://github.com/SimonaPiz/Drum-Machine)
- ☑ Live Site URL: [drum-machine-simonapiz.netlify.app](https://drum-machine-simonapiz.netlify.app/)


## Table of contents

- [Links](#links)
- [Overview](#overview)
- [My process](#my-process)
- [Built with](#built-with)
- [Author](#author)
- [Acknowledgements](#acknowledgements)

## Overview

### Objective 

Build an app that is functionally similar to this: [drum-machine.freecodecamp]( https://drum-machine.freecodecamp.rocks/).

<img src="https://github.com/SimonaPiz/Drum-Machine/assets/91121660/3a941119-2d87-4349-9947-a8f21b1284f4" width="400px" alt="drum-machine-preview" title="drum-machine-preview">

### User Stories:
   - [x] I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.
   - [x] Within `#drum-machine` I can see an element with a corresponding `id="display"`.
   - [x] Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order.
   - [x] Within each `.drum-pad`, there should be an HTML5 `audio` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an id corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).
   - [x] When I click on a `.drum-pad` element, the audio clip contained in its child `audio` element should be triggered.
   - [x] When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).
   - [x] When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique).

## My process

1. 🗂 Initialize the project on [GitHub](https://github.com/SimonaPiz/Drum-Machine) and use Git for log my commits and versioning my work.

2. ✏ I looked at the designs to start planning how to approach the project
  
3. ⚙ Implemented project features:

   ### - Create React Elements [☑issue #1](https://github.com/SimonaPiz/Drum-Machine/issues/1)

   ![React Components](https://github.com/SimonaPiz/Drum-Machine/assets/91121660/ec4a53a7-05ff-4056-a583-fcfabe3c7076)

  - [x] 🟧 Main component `id="drum-machine"`
    - [x] 🟩 pads container
      - [x] 🟦  9 clickable drum `.drum-pad` elements, , each with a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
      - [x] Within each `.drum-pad`, there should be an HTML5 `audio` element which has a `src` attribute pointing to an audio clip, a class name of `clip`, and an id corresponding to the inner text of its parent `.drum-pad` (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).
    - [x] 🟥 element `id="display"`


   ### - Add Interactivity [☑issue #4](https://github.com/SimonaPiz/Drum-Machine/issues/4)
       
   - [x] Menage Status with Redux [☑ issue #5](https://github.com/SimonaPiz/Drum-Machine/issues/5)
   - [x] 🟦 When I click on a `.drum-pad` element, the audio clip contained in its child `audio` element should be triggered.
   - [x] 🟦 When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).
   - [x] 🟥 When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element (each string must be unique). 
      
   ### Test suite provided
   
   ✔ All tests passed
       

## Built with

- Semantic HTML5 markup
- CSS/SCSS custom properties
- Flexbox
- React 18
- Redux 5
- react-redux 9
- @reduxjs/toolkit 2

## Author

- Website - [Simona Pizio](https://github.com/SimonaPiz)
- Codepen - [SimonaPiz/pen](https://codepen.io/SimonaPiz/pen/qBweyZB)
- Freecodecamp - [freecodecamp/SimonaPiz](https://www.freecodecamp.org/SimonaPiz)

## Acknowledgements
This is a solution to the [Build a Drum Machine](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine) project to earn the [Front End Development Libraries certification](https://www.freecodecamp.org/learn/front-end-development-libraries/) by FreeCodeCamp.
