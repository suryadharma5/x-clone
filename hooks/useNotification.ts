import fetcher from "@/lib/fetcher"
import useSWR from "swr"

const useNotificaton = (userId?: string) => {
    const url = userId ? `/api/notifications/${userId}` : null
    const { data, isLoading, error, mutate } = useSWR(url, fetcher)

    return {
        data,
        isLoading,
        error,
        mutate
    }
}

export default useNotificaton
