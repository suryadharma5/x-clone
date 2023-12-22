import useCurrentUser from '@/hooks/useCurrentUser'
import useEditModal from '@/hooks/useEditModal'
import useUser from '@/hooks/useUser'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Modal from '../Modal'
import Input from '../Input'
import ImageUpload from '../ImageUpload'

const EditModal = () => {
    const { data: currentUser } = useCurrentUser()
    const { mutate: mutateFetchUser } = useUser(currentUser?.id)
    const editModal = useEditModal()

    const [profileImage, setProfileImage] = useState("")
    const [coverImage, setCoverImage] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {
        setProfileImage(currentUser?.profileImage)
        setCoverImage(currentUser?.coverImage)
        setName(currentUser?.name)
        setUsername(currentUser?.username)
        setBio(currentUser?.bio)
    }, [currentUser?.profileImage, currentUser?.coverImage, currentUser?.name, currentUser?.username, currentUser?.bio])


    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            await axios.patch('/api/edit', {
                name,
                username,
                bio,
                profileImage,
                coverImage
            })

            mutateFetchUser()

            toast.success("Updated Successfully")

            editModal.onClose()

        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }, [profileImage, coverImage, name, username, bio, editModal, mutateFetchUser])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <ImageUpload
                value={profileImage}
                disabled={isLoading}
                onChange={(image) => setProfileImage(image)}
                label='Upload profile image'
            />

            <ImageUpload
                value={coverImage}
                disabled={isLoading}
                onChange={(image) => setCoverImage(image)}
                label='Upload cover image'
            />
            <Input
                placeHolder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input
                placeHolder='Username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input
                placeHolder='Bio'
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                disabled={isLoading}
            />
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={editModal.isOpen}
            title='Edit your profile'
            actionLabel='save'
            onClose={editModal.onClose}
            onSubmit={handleSubmit}
            body={bodyContent}
        />
    )
}

export default EditModal
