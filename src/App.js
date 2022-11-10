import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {

  const myfunc = () => {
    alert("Hi there")
  }
  return (
    <div className="App">
      
        <h1>HI there</h1>
        <Button variant="primary" onClick={myfunc}>Click Me</Button>
     
    </div>
  );
}

export default App;
