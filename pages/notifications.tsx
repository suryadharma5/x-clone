import React from 'react'
import Header from '@/components/Header'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import NotificationFeed from '@/components/NotificationFeed'

export async function getServerSideProps(context: NextPageContext) {
    // cek untuk penjagaan akses ke notifications route
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,

            }
        }
    }

    return {
        props: {
            session
        }
    }
}

const Notifications = () => {
    return (
        <>
            <Header label='Notifications' showBackArrow />
            <NotificationFeed />
        </>
    )
}

export default Notifications
