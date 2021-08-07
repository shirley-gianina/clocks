import './App.css';
import About from './pages/About/inidex';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home from './pages/Home';
import Shop from './pages/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/shop/:id">
            <ProductDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
