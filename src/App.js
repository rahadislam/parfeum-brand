import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './comoponets/About/About';
import AllReview from './comoponets/AllReview/AllReview';
import Blog from './comoponets/Blog/Blog';
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
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
