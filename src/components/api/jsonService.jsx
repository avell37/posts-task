import useApi from './api.hook';

const jsonService = () => {
    const {loading, error, request, clearError} = useApi();

    const _apiBase = 'https://jsonplaceholder.typicode.com/';

    const getAllPosts = async () => {
        const res = await request(`${_apiBase}posts`);
        return res;
    }

    return {getAllPosts}
}

export default jsonService;