import './App.css';
import { Content } from './components/Content';
import NavTop from './components/Navbar';
import Carousal from './components/Carousal';
import Login from './components/LoginForm';

function App() {
  return (
    <div className="App">
      {/* <Content/> */}
      <div className='Dummy' style={{height:"65px"}} >
      </div>
      <Carousal/>
      <Login/>

    </div>
  );
}

export default App;
