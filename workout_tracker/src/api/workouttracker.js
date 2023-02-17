import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'http://localhost:9000'
})

instance.interceptors.request.use(
    async (config)=> {
        // This is the attempt we're going to do.
        const token = await AsyncStorage.getItem("token");
        if (token)
        {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        // This is the error case if we ever fail.
        return Promise.reject(err);
    }
)

export default instance;