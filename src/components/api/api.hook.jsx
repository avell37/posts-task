import { useState, useCallback } from "react";

export const useApi = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = "GET", body = null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true);

        try {
            const res = await fetch(url, {method, body, headers});

            if (!res.ok) {
                throw new Error(`Error! Could not fetch ${url}, status: ${res.status}`);
            }

            const data = await res.json();

            setLoading(false);
            return data;

        } catch (err) {
            setLoading(false);
            setError(true);
            throw err;
        }
    }, []) 

    const clearError = useCallback(() => setError(null), []);

    const postRequest = useCallback(async (url, postData, headers = {'Content-Type': 'application/json'}) => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: headers
            });
    
            if (!res.ok) {
                throw new Error(`Error! Could not fetch ${url}, status: ${res.status}`)
            }

            const data = await res.json();
            return data;
        } catch (err) {
            throw err;
        }

    }, [])
    
    return {loading, error, request, clearError, postRequest};
}