import axios from '../api/axios';
import { updateAccessToken } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const useRefreshToken = () => {
    const dispatch = useDispatch();
    const refreshToken = useSelector((state:any)=>state.auth.refreshToken)
    const refresh = async () => {
        const response = await axios.post('/refresh', {
            refreshToken
        });
        dispatch(updateAccessToken({accessToken:response.data.accessToken}))
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;