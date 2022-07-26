import useAxiosPrivate from '../../Hooks/useAxiosPrivate';

export const GetUserData = async()=>{
    const axiosPrivate = useAxiosPrivate();
    const respomse = await axiosPrivate.get('/user');
    return respomse;
}