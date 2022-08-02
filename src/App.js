
import './App.css';
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
     <Navbar/>
     <Dashboard/>
     <hr />
     <Signup/>
     <hr />
     <Signin/>
    </>
  );
}

export default App;
