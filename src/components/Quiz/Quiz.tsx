import { quizesArray } from '../quizesArray';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from "react-router-dom";
import { Answer } from '../Answer/Answer';
import JSConfetti from 'js-confetti'

export const Quiz = () => {
  const params = useParams();
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isDisabled, setIsDisabled] = useState(true);

  const currentQuiz = quizesArray.find((item) => item.id === Number(params.id))
  const currentQuestion = currentQuiz?.questions?.[currentQuestionIndex];

  const mapAnswers = currentQuestion?.answers?.map(({ id, answer }) => {
    return <button key={id} disabled={!isDisabled}>
      <Answer id={id}
        text={answer}
        key={id}
        variant={answers[currentQuestion.id] ? getVariant(id) : 'default'}
        onClick={() => handleAnswerClick(id)}
      />
    </button>
  })

  const confettiRef = useRef<any>(null);

  useEffect(() => {
    const jsConfetti = new JSConfetti();

    confettiRef.current = jsConfetti;
  }, []);


  function handleAnswerClick(id: number) {
    setScore(currentQuestion?.correctAnswer === id ? score + 1 : score)
    setAnswers({
      ...answers, [currentQuestion?.id!]: id
    });
    setIsDisabled(false);
  }

  if (score === currentQuiz?.questions.length) confettiRef.current.addConfetti()

  function getVariant(id: number) {
    const hasBeenSelected = answers[currentQuestion?.id!] == id
    const isAnswerCorrect = currentQuestion?.correctAnswer == id

    if (hasBeenSelected || isAnswerCorrect) {
      return currentQuestion?.correctAnswer === id ? 'correct' : 'wrong';
    }
  }

  function changeQuestion() {
    if (currentQuestionIndex <= 6) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setIsDisabled(true)
    }
  }

  return (
    <>
      <div className="py-16 px-28">
        <div className="flex text-5pxl justify-between items-center">
          <p>👋<span className='font-bold text-purple-600'>Quiz</span>Time</p>
          <div className="text-light-lime border-4 rounded border-light-lime px-12">{score}</div>
        </div>
        <div className="my-16 text-center font-bold text-4xl text-purple-600">{currentQuestion?.question}</div>
        <div className="w-fit mx-auto flex flex-col gap-16">
          <div className="flex gap-11 justify-center">
            {mapAnswers}
          </div>
          <div className="flex justify-between text-2xl">
            <p><span className='text-3xl'>{currentQuestionIndex + 1}</span>/{currentQuiz?.questions?.length}</p>
            <button disabled={isDisabled} onClick={() => changeQuestion()} className='bg-purple-200 border rounded-full py-4 px-5'> <img src="/public/arrow.svg" alt="arrow to right" /></button>
          </div>
        </div>
      </div>
    </>
  )
}
