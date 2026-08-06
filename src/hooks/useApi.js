// src/hooks/useApi.js
import { useState, useEffect } from 'react';

export const useApi = (serviceMethod, ...args) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await serviceMethod(...args);
                setData(result);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};