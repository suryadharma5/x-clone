import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import axios from 'axios'
import { toast } from "react-hot-toast"
import { signIn } from 'next-auth/react'

const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleToggle = useCallback(() => {
        if (isLoading) {
            return
        }

        registerModal.onClose()
        loginModal.onOpen()
    }, [isLoading, registerModal, loginModal])

    const handleSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            await axios.post('/api/register', {
                email,
                password,
                username,
                name
            })

            toast.success("Account created")

            signIn('credentials', {
                email,
                password
            })

            registerModal.onClose()
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }, [registerModal, email, password, username, name])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input
                placeHolder='Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
                type='text'
            />
            <Input
                placeHolder='Username'
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                disabled={isLoading}
                type='text'
            />
            <Input
                placeHolder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
                type='email'
            />
            <Input
                placeHolder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
                type='password'
            />
        </div>
    )

    const footerContent = (
        <div className='text-neutral-400 text-center mt-4'>
            <p>
                Already have an account? <span onClick={handleToggle} className='text-white cursor-pointer hover:underline'>Sign In</span>
            </p>
        </div>
    )

    return (
        <Modal
            actionLabel='Register'
            isOpen={registerModal.isOpen}
            title='Create an acount'
            disabled={isLoading}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
