import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigate } from "react-router-dom";
import { ViewWorkoutsPage } from "../components/workout/ViewWorkoutsPage";

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
                <>
                    <ViewWorkoutsPage/>
                </>
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