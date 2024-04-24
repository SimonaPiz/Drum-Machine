import { DrumMachine } from "./features/DrumMachine/DrumMachine";
import { Provider } from "react-redux";
import { store } from './store';

function App() {
  return (
    <Provider store={store} >
      <DrumMachine />
    </Provider>
  );
}

export default App;
