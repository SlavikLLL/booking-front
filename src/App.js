import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import List from './Pages/List/List';
import Hotel from './Pages/Hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<HomePage />} />
      <Route path='/hotels' element= {<List />} />
      <Route path='/hotels/:id' element={<Hotel />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
