import './App.css';
import MenuPrincipal from './components/menu';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">  
    <Provider store={store}>
      <MenuPrincipal />
    </Provider>
    </div>
  );
}

export default App;
