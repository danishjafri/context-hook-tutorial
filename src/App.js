import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;
