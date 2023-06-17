import {useCallback, useEffect, useState} from "react";

const usePaginatedFetcher = <T, K extends { hasMore: boolean }>(fetcher: (paginationParams?: K) => Promise<{
    data: T,
    paginationParams: K
}>, merger: (oldData: T | null, newData: T) => T) => {
    const [state, setState] = useState<{
        loading: boolean;
        error: string | null;
        data: T | null;
        fetching: boolean;
        paginationParams: K | null;
        fetched: boolean;
        refetching: boolean;
    }>({
        loading: false,
        error: null,
        fetching: false,
        data: null,
        paginationParams: null,
        fetched: false,
        refetching: false
    })

    const fetch = useCallback(async (paginationParams?: K) => {
        setState((prevState) => ({
            ...prevState,
            loading: !prevState.fetched,
            fetching: prevState.fetched,
            error: null,
            refetching: prevState.fetched
        }))

        try {
            const {data, paginationParams: newPaginationParams} = await fetcher(paginationParams);
            setState((prevState) => ({
                ...prevState,
                loading: false,
                fetching: false,
                data: prevState.fetched ? merger(prevState.data, data) : data,
                paginationParams: newPaginationParams,
                fetched: true,
                refetching: false
            }))
        } catch (e) {
            setState((prevState) => ({
                ...prevState,
                loading: false,
                fetching: false,
                error: "Failed to fetch data",
                refetching: false
            }))
        }
    }, [merger, fetcher]);

    const loadMore = useCallback(async () => {
        if (state.paginationParams && state.paginationParams.hasMore) {
            await fetch(state.paginationParams)
        }
    }, [fetch, state.paginationParams]);

    useEffect(() => {
        if (!state.fetched && !state.refetching && !state.loading) {
            fetch()
        }
    }, [fetch, state.fetched, state.refetching, state.loading])

    return {
        ...state,
        loadMore,
        refetch: fetch
    }
}

export default usePaginatedFetcher;