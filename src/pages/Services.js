import { useContext } from 'react'
import { UserContext } from '../context-store/UserContext';

const Services = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <h1>Services</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    );
}

export default Services;