import './App.css';
import Home from './Component1';
import Login from './Login';
import Ccompo2 from './Compo2';
function App() {
  return (
    <div>
    <Home></Home>
    <Ccompo2></Ccompo2> 
    {/* using class functions */}
    <Login></Login>
    </div>
  )
}

export default App;
