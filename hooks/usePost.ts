import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const usePost = (postId: string) => {
    const url = postId ? `/api/posts?postId=${postId}` : null
    const { data, error, isLoading, mutate } = useSWR(url, fetcher)

    return { data, error, isLoading, mutate }
}

export default usePost
