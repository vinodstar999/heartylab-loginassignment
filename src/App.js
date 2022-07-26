import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import ErrorLogin from './components/ErrorLogin';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/registration" element={<Register/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/errorlogin' element={<ErrorLogin/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
