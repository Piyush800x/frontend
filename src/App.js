import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar2 from './components/Navbar2';
import Items from './components/Items';
import ItemsListPage from './pages/ItemsListPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import LoginSignupPage from './pages/LoginSignupPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
        <div className="App">
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/login' component={LoginSignupPage}/>
          <Route path='/usersignup' component={SignupPage}/>
          <Route path='/userlogin' component={LoginPage}/>
        </div>
    </Router>
  );
}

export default App;
