import React from 'react'

type InputProps = {
    placeHolder?: string
    value?: string
    type?: string
    disabled?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
    placeHolder,
    value,
    type,
    disabled,
    onChange
}) => {
    return (
        <div>
            <input
                type={type}
                disabled={disabled}
                value={value}
                placeholder={placeHolder}
                onChange={onChange}
                className="
                    w-full
                    p-4
                    text-lg
                    bg-black
                    border-2
                    border-neutral-800
                    rounded-md
                    outline-none
                    text-white
                    focus:border-sky-500
                    focus:border-2
                    transition
                    disabled:bg-neutral-900
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                "
            />
        </div>
    )
}

export default Input
