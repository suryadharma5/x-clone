import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import Input from '../Input'
import Form from '../Form'
import useTweetModal from '@/hooks/useTweetModal'
import usePosts from '@/hooks/usePosts'

const TweetModal = () => {
    const tweetModal = useTweetModal()

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Form
                placeHolder='What&apos;s on your mind'
                isTweetModal
            />
        </div>
    )
    return (
        <Modal
            actionLabel='Tweet'
            onClose={tweetModal.onClose}
            title='Tweet'
            onSubmit={() => { }}
            isOpen={tweetModal.isOpen}
            body={bodyContent}
            isTweetModal
        />
    )
}

export default TweetModal
