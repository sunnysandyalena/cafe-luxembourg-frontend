import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import logoImg from './logo.jpg';
import homeImg from './home-mockup.png';
import profileImg from './profile-mockup.png';
import menuImg from './food-mockup.png';
import cartImg from './cart-mockup.png'
import Cart from './Components/Cart/Cart';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Menu from './Components/Menu';

function App() {
  return <Router>
    <nav>
      <Link className='link' to="/"><img className='icon' src={homeImg} alt="Home Page"/></Link>
      <Link className='link' to="/Menu"><img className='icon' src={menuImg} alt="Menu"/></Link>
      <Link className='link' to="/"><img className='logo' src={logoImg} alt="Logo"/></Link>
      <Link className='link' to="/Cart"><img className='icon' src={cartImg} alt="Cart"/></Link>
      <Link className='link' to="/Profile"><img className='icon' src={profileImg} alt="Profile"/></Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
  </Router>
}

export default App;
