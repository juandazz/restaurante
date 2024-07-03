import logo from './logo.svg';
import './App.css';
import { Inicio } from './Paginas/Inicio/Inicio';
import {Routes, Route} from 'react-router-dom';
import { Menu } from './Paginas/Menu/Menu';
import { ProductsTitleTable } from './Paginas/Componentes/ProductsTitleTable';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Inicio> </Inicio>}>  </Route>
        <Route path='/menu' element = {<Menu> </Menu>}>  </Route>
        <Route path='/favoritos' element = {<Menu> </Menu>}>  </Route>
        <Route path='/tarjeta' element = {<ProductsTitleTable> </ProductsTitleTable>}>  </Route>
      </Routes>
      
    </div>
  );
}

export default App;
