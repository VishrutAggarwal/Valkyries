import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Landing/>
      <Footer/>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
