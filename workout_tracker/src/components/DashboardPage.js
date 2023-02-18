import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigate } from "react-router-dom";

const Dashboard = () => { 
    const [authenticated, setAuthenticated] = useState(false);
    const [hasLoaded, setLoaded] = useState(false)

    useEffect(() => {
        const checkForLogin = async () => {
                const token = await AsyncStorage.getItem('token');
                if (token)
                {
                    setAuthenticated(true);
                    
                }
                setLoaded(true);
        }
        checkForLogin().catch(console.error);
    }, []);

    if (hasLoaded)
    {
        if (!authenticated) {
            return <Navigate replace to="/login" />;
        } else {
            return (
            <div>
                    <p>Welcome to your Dashboard</p>
            </div>
            );
        }
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
};

export default Dashboard;