import useLoginModal from '@/hooks/useLoginModal'
import React, { useCallback, useState } from 'react'
import Input from '../Input'
import Modal from '../Modal'
import useRegisterModal from '@/hooks/useRegisterModal'

const LoginModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleToggle = () => {
        if (isLoading) {
            return
        }

        loginModal.onClose()
        registerModal.onOpen()
    }

    const handleSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            // TODO: ADD LOGIN

            loginModal.onClose()
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }, [loginModal])

    const bodyContent = (
        <div className='flex flex-col gap-4'>
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
                Don't have an account yet ? <span onClick={handleToggle} className='text-white cursor-pointer hover:underline'>Create an account</span>
            </p>
        </div>
    )

    return (
        <Modal
            actionLabel='Sign in'
            isOpen={loginModal.isOpen}
            title='Login'
            disabled={isLoading}
            onClose={loginModal.onClose}
            onSubmit={handleSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal
