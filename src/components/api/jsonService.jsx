import {useApi} from './api.hook';

export const jsonService = () => {
    const {loading, error, request, clearError} = useApi();

    const _apiBase = 'https://jsonplaceholder.typicode.com/';

    const getAllPosts = async () => {
        const res = await request(`${_apiBase}posts`);
        return res;
    }

    const getPostComments = async (id) => {
        const res = await request(`${_apiBase}posts/${id}/comments`)
        return res;
    }

    return {getAllPosts, getPostComments}
}