import useCurrentUser from "@/hooks/useCurrentUser"
import useLoginModal from "@/hooks/useLoginModal"
import useTweetModal from "@/hooks/useTweetModal"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { FaFeather } from "react-icons/fa"

const SidebarTweetButton = () => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const tweetModal = useTweetModal()
    const { data: currentUser } = useCurrentUser()

    const onClick = useCallback(() => {
        if (currentUser) {
            loginModal.onOpen()
        } else {
            tweetModal.onOpen()
        }
    }, [loginModal])

    return (
        <div onClick={onClick}>
            {/* Mobile */}
            <div className="
                mt-6
                lg:hidden
                h-14
                w-14
                p-4
                rounded-full
                items-center
                justify-center
                bg-sky-500
                hover:bg-opacity-80
                transition
                cursor-pointer
            ">
                <FaFeather size={24} color="White" />
            </div>

            <div className="
                mt-6
                hidden
                lg:block
                px-4
                py-2
                rounded-full
                bg-sky-500
                hover:bg-opacity-90
                cursor-pointer
                transition
            ">
                <p className="
                    hidden
                    lg:block
                    text-center
                    font-semibold
                    text-white
                    text-[20px]
                ">
                    Tweet
                </p>
            </div>
        </div>
    )
}

export default SidebarTweetButton
