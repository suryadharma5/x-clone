import React, { useEffect } from 'react'
import useCurrentUser from '@/hooks/useCurrentUser'
import useNotificaton from '@/hooks/useNotification'
import { BsX } from 'react-icons/bs'

const NotificationFeed = () => {
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser()
    const { data: fetchedNotifications = [] } = useNotificaton(currentUser?.id)

    useEffect(() => {
        mutateCurrentUser()
    }, [mutateCurrentUser])

    if (fetchedNotifications.length === 0) {
        return (
            <div className='text-neutral-600 text-center p-6 text-xl'>
                No notifications
            </div>
        )
    }

    return (
        <div className='flex flex-col'>
            {
                fetchedNotifications.map((notif: Record<string, any>) => (
                    <div
                        key={notif.id}
                        className='
                            flex
                            flex-row
                            items-center
                            p-6
                            gap-4
                            border-b-[1px]
                            border-neutral-800
                        '
                    >
                        <BsX color='white' size={32} />
                        <p className='text-white'>
                            {notif.body}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default NotificationFeed
