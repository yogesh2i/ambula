import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Utils/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
//main component containing home,about,contact page
//all used components located inside components folder
//navbar will be shown at top of each page


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/ambula' element={ <Home/>}/>
       <Route path='/about-us' element={<About/>}/>
       <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
