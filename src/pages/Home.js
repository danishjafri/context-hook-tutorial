import { useContext } from 'react'
import { Login } from '../services/Login';
import { UserContext } from '../context-store/UserContext';

const Home = () => {
    const { user, setUser } = useContext(UserContext)
    return (
        <>
            <h1>Home</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {
                user ? (
                    <button
                        // call logout
                        onClick={() => { setUser(null) }}
                    >Logout</button>
                ) : (
                    <button
                        onClick={async () => {
                            const user = await Login()
                            setUser(user)
                        }}
                    >Login</button>
                )
            }
        </>
    );
}

export default Home;