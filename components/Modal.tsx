// React Component & Function
import React, { useCallback } from 'react'

// icons
import { AiOutlineClose } from "react-icons/ai"
import Button from './Button'

type ModalProps = {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string
    disabled?: boolean
    isTweetModal?: boolean
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    isTweetModal
}) => {
    const handleClose = useCallback(() => {
        if (disabled) {
            return
        }

        onClose()
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return
        }

        onSubmit()
    }, [disabled, onSubmit])

    if (!isOpen) {
        return null
    }

    return (
        <>
            <div className='
                flex
                justify-center
                items-center
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800
                bg-opacity-70
            '>
                <div className='
                    relative
                    w-full
                    lg:w-3/6
                    my-6
                    mx-auto
                    lg:max-w-full
                    h-full
                    lg:h-auto
                '>
                    {/* Modal Content */}
                    <div className='
                        h-full
                        lg:h-auto
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-black
                        outline-none
                        focus:outline-none
                    '>
                        {/* Header */}
                        <div className='
                            flex
                            items-center
                            justify-between
                            p-10
                            rounded-t
                        '>
                            <h3 className='text-3xl font-semibold text-white'>
                                {title}
                            </h3>
                            <button
                                onClick={handleClose}
                                className="
                                    p-1
                                    ml-auto
                                    border-0
                                    text-white
                                    hover:opacity-70
                                    transition
                                "
                            >
                                <AiOutlineClose size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className='p-10 relative flex-auto'>
                            {body}
                        </div>

                        {/* Footer */}
                        <div className='flex flex-col gap-2 p-10'>
                            <Button label={actionLabel} disabled={disabled} secondary fullwidth large onClick={handleSubmit} isHidden={isTweetModal} />
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
