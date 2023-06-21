import React, { useEffect, useState } from 'react'
import { Data } from '../models/Models';

export const useJsonFetch = (url: string, opts: string) => {
    const [data, setData] = useState<Data>();
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState<Error>();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url + opts);
                if (!response.ok) throw new Error(response.statusText);

                const data = await response.json();

                setData(data as Data);
                setError(undefined);

            } catch (e) {
                setError(e as Error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return [data, isLoading, hasError];
}

