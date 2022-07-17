import { useContext } from 'react'
import { UserContext } from '../context-store/UserContext';

const About = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <h1>About</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    );
}

export default About;