import './App.css';
import Home from './Component1';
import Login from './Login';
import Ccompo2 from './Compo2';
import Car from './Car';
function App() {
  return (
    <div>
      <Car></Car>
    <Home></Home>
    <Ccompo2></Ccompo2> 
    {/* using class functions */}
    <Login></Login>
    </div>
  )
}

export default App;
