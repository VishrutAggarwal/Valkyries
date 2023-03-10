import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Resources from './components/Resources';
import Forum from './components/Forum';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Helpline from './components/Helpline';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path = '/' element={<Landing/>}></Route>
          <Route path = '/register' element={<Register/>}></Route>
          <Route path = '/login' element={<Login/>}></Route>
          <Route path = '/forum' element={<Forum/>}></Route>
          <Route path = '/resources' element={<Resources/>}></Route>
          <Route path = '/dashboard' element={<Dashboard/>}></Route>
          <Route path = '/helpline' element={<Helpline/>}></Route>
        </Routes>
      </Router>
      <Footer />
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
