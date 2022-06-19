import Register from './Register';
import Login from './Login'
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

function App() {
  return (
    <main className='App'>
      <Register/>
      <Login/> 

    </main>
  
    
  );
}

export default App;
