import { useState, useMemo } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import { UserContext } from '../context-store/UserContext';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const userMemo = useMemo(() => ({ user, setUser }), [user, setUser])
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
            </nav>
            <UserContext.Provider value={userMemo}>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/services' element={<Services />}></Route>
                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default Navbar;