import React, { HTMLAttributes } from 'react'

type AnswerProps = {
    id: number,
    text: string,
    variant?: 'default' | 'correct' | 'wrong'
} & Omit<HTMLAttributes<HTMLDivElement>, "id">

export const Answer = ({ id, text, onClick, variant = 'default' }: AnswerProps) => {
    const commonStyle = 'flex border-4 text-zinc-300 rounded min-h-72 w-60 relative justify-center items-center flex-col cursor-pointer'

    const style = {
        default: "",
        correct: "border-light-lime text-light-lime",
        wrong: "border-rose-600 text-rose-600"
    }

    return (
        <div className={commonStyle + " " + style[variant]} onClick={onClick}>
            <div className={`${" flex justify-center items-center border-4 rounded-full absolute top-2 right-2 w-5 h-5 p-2"} ${style[variant]}`}>
                <span>&#10004;</span>
            </div>
            <div className={`${"text-center text-9xl text-zinc-300"} ${style[variant]}`}>{id}</div>
            <div className="px-8 text-center">{text}</div>
        </div>
    )
}