import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Maincontent from './MainContent';


function App() {
  return (
    <div id="wrapper" className='App'>
        <div id="side"><Sidebar /></div>
        <div id="main"><Maincontent /></div>
    </div>
  );
}

export default App;
