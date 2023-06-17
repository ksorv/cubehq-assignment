import {useCallback, useEffect, useState} from "react";

const useFetcher = <T>(fetcher: () => Promise<T>) => {
    const [state, setState] = useState<{
        loading: boolean;
        error: string | null;
        data: T | null;
        fetched: boolean;
        refetching: boolean;
    }>({
        loading: false,
        error: null,
        data: null,
        fetched: false,
        refetching: false
    })

    const fetch = useCallback(async () => {
        setState((prevState) => ({
            ...prevState,
            loading: !prevState.fetched,
            error: null,
            refetching: prevState.fetched
        }))

        try {
            const data = await fetcher();

            setState((prevState) => ({
                ...prevState,
                loading: false,
                data,
                fetched: true,
                refetching: false
            }))
        } catch (e) {
            setState((prevState) => ({
                ...prevState,
                loading: false,
                error: "Failed to fetch data",
                refetching: false
            }))
        }
    }, [fetcher]);

    useEffect(() => {
        fetch()
    }, [fetch])

    return {
        ...state, fetch, fetching: state.loading || state.refetching
    }
}

export default useFetcher;