import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Capitulos from './components/Capitulos';
import Aess from './components/Aess';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Wie from './components/Wie';
import Computer from './components/Computer';
import Ras from './components/Ras';
import Login from './components/Login';
import AdminHome from './components/AdminHome';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>   
            <Route path='/capitulos' element={<Capitulos/>}/>
            <Route path='/aess' element={<Aess/>}/>
            <Route path='/wiee' element={<Wie/>}/>
            <Route path='/computer' element={<Computer/>}/>
            <Route path='/ras' element={<Ras/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<AdminHome/>}/>
            <Route path='/event' element={<Events/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;