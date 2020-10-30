import logo from './logo.svg';
import './App.css';
import Mynavigation from './Components/Mynavigation';
import Myroute from './Components/Myroute';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mynavigation></Mynavigation>
        <Myroute></Myroute>
      </BrowserRouter>
    </div>
  );
}

export default App;
