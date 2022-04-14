import React, { useState } from 'react'

type Props = {
    question: string
    answers: string[]
    questionNumber: number
    totalQuestions: number
    rightAnswer: string
    setRightAnswers: React.Dispatch<React.SetStateAction<number>>
    setRight: React.Dispatch<React.SetStateAction<boolean>>
    right: boolean
}

const QuestionCart: React.FC<Props> = (props: Props) => {


    function handleClick(e: any) {
        if (e.target.value === props.rightAnswer) {
            e.target.style.background = "green"
            props.setRight(true)
            props.setRightAnswers(number => number + 1)

        } else {
            e.target.style.background = "red"
            props.setRight(true)
        }
    }

    return (
        <div>
            <p className='quiz__number'>Question: {props.questionNumber} / {props.totalQuestions} </p>
            <h3 className='quiz__question' >{props.question}</h3>
            {
                props.answers.map(item => (
                    <button className='quiz__answer' key={item} disabled={props.right && true} onClick={(e) => handleClick(e)} value={item}>{item}</button>
                ))
            }
        </div>
    )
}

export default QuestionCart