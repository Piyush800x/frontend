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
import ContactPage from './pages/ContactPage';
import NewsLetterPage from './pages/NewsLetterPage';
import { AuthProvider } from './context/AuthContext';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
        <div className="App">
          <AuthProvider>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/extras' component={LoginSignupPage}/>
            <Route path='/signup' component={SignupPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/newsletter' component={NewsLetterPage}/>
            <Route path='/about' component={AboutPage}/>
          </AuthProvider>
        </div>
    </Router>
  );
}

export default App;
