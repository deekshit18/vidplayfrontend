import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Watchhistory from './pages/Watchhistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>

      <Header/>
<Routes>
  <Route path='/' element={<Landing/>}></Route>
<Route path='/home' element={<Home/>}></Route>
<Route path='/watchhistory' element={<Watchhistory/>}></Route>

</Routes>
<Footer/>
    </div>
  );
}

export default App;
