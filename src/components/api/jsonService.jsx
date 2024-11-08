import { useApi } from './api.hook';

export const useJsonService = () => {

    const {loading, error, request, clearError, postRequest } = useApi();

    const _apiBase = 'https://jsonplaceholder.typicode.com/';

    const getAllPosts = async () => {
        const res = await request(`${_apiBase}posts`);
        return res;
    }

    const getPostComments = async (id) => {
        const res = await request(`${_apiBase}posts/${id}/comments`)
        return res;
    }

    const createPost = async (postData) => {
        try {
            const newPost = await postRequest(`${_apiBase}posts`, postData);
            return newPost;
        } catch (err) {
            throw err;
        }
    }

    const deletePost = async (id) => {
        try {
            console.log(`Attempting to delete post with ID: ${id}`);
            await request(`${_apiBase}posts/${id}`, 'DELETE');
            console.log(`Post with ID: ${id} deleted successfully`);
        } catch (err) {
            throw err;
        }
    }

    return {loading, error, clearError, getAllPosts, getPostComments, createPost, deletePost};
}