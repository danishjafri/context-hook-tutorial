import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';

const Nav = () => {
    return (
        <div id='nav-container'>
            <div id='navbar'>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/services'>Services</Link>
                </nav>
            </div>

            <div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Nav;