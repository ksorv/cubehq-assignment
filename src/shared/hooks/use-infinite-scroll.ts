import {useCallback, useEffect, useMemo, useState} from "react";


const useInfiniteScroll = (loadMore: () => Promise<void>, itemToMatchFromEnd: number) => {
    const [node, setNode] = useState<HTMLElement | null>(null)

    const observer = useMemo(() => new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                loadMore()
            }
        })
    }), [loadMore])

    useEffect(() => {
        if (node) {
            const totalItems = node.children.length
            const itemToMatch = node.children.item(totalItems - itemToMatchFromEnd)
            if (itemToMatch) {
                observer.observe(itemToMatch as HTMLElement)

                return () => {
                    observer.unobserve(itemToMatch as HTMLElement)
                }
            }
        }
    }, [node, observer, itemToMatchFromEnd])

    // node here is the lists ref from which we want to observe the list items and set a observer on itemToMatchFromEnd
    return useCallback((node: HTMLDivElement) => {
        if (node) {
            setNode(node)
        }
    }, [])
}

export default useInfiniteScroll