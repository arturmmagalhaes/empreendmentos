import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Routes from './routes/routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">  
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
