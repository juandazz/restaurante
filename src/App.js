import logo from './logo.svg';
import './App.css';
import { Inicio } from './Paginas/Inicio/Inicio';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Inicio> </Inicio>}>  </Route>
      </Routes>
      
    </div>
  );
}

export default App;
