
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from  './components/Services';

import Product  from './components/Product';
import Footer from './components/footer';

import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/services.scss';
import './styles/contact.scss';
import './styles/mediaquery.scss'

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Header></Header>
<Routes>
 
  <Route path='/' element={<Home></Home>}/>
  <Route path='/about' element={<About></About>}></Route>

  <Route path='/product/:id' element={<Product></Product>}></Route>
  <Route path='/contact' element={<Contact></Contact>}/>
<Route path='/Services' element={<Services></Services>}></Route>
  <Route path='*' element={<div>page not found</div>}></Route>
</Routes>
<Footer></Footer>

    </BrowserRouter>
   
  );
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
  
}

export default App;
