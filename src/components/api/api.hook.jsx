import { useState, useCallback } from "react";

const useApi = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (url, method = "GET", body = null,
    headers = {'Content-Type': 'application/json'}) => {

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

    const clearError = useCallback(() => setError(false), []);
    
    return {loading, error, request, clearError};
}

export default useApi;