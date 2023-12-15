import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        try {
            const resp = await fetch(url);

            if (!resp.ok) {
                throw new Error(`Error: ${resp.status} -> No se pudo realizar la petición hacia ${url}`);
            }

            const data = await resp.json();

            setState({
                data,
                loading: false,
                error: null
            });
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error.message
            });
        }
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
};
