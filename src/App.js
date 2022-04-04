import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReview from './comoponets/AllReview/AllReview';
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
        <Route path='/reviews' element={<AllReview></AllReview>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
