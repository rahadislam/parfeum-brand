import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashbord from './comoponets/Dashboard/Dashbord';
import Home from './comoponets/Home/Home';
import Navber from './comoponets/Navber/Navber';
import PageNotFound from './comoponets/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashbord></Dashbord>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
