'use client'

import { useState } from 'react'

interface ExerciseItem {
  question: string
  answer: string
  options?: string[]
}

interface Exercise {
  type: 'matching' | 'translation' | 'fillBlank' | 'multipleChoice'
  items: ExerciseItem[]
}

interface InteractiveQuizProps {
  exercises: Exercise[]
  languageColor?: string
  onComplete?: (score: number, total: number) => void
}

export function InteractiveQuiz({ exercises, languageColor = '#1b3a6b', onComplete }: InteractiveQuizProps) {
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0)
  const [currentItemIdx, setCurrentItemIdx] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [history, setHistory] = useState<{ correct: boolean; question: string }[]>([])

  if (!exercises || exercises.length === 0) return null

  const exercise = exercises[currentExerciseIdx]
  const item = exercise.items[currentItemIdx]
  const totalItems = exercises.reduce((acc, ex) => acc + ex.items.length, 0)
  const currentTotalIdx = exercises
    .slice(0, currentExerciseIdx)
    .reduce((acc, ex) => acc + ex.items.length, 0) + currentItemIdx + 1

  const checkAnswer = () => {
    let correct = false

    switch (exercise.type) {
      case 'translation':
      case 'fillBlank':
        // Normalize answer: lowercase, trim, remove extra spaces
        const normalized = userAnswer.toLowerCase().trim().replace(/\s+/g, ' ')
        const expected = item.answer.toLowerCase().trim().replace(/\s+/g, ' ')
        // Allow minor differences (with/without accents)
        const normalizedNoAccents = normalized.normalize('NFD').replace(/[̀-ͯ]/g, '')
        const expectedNoAccents = expected.normalize('NFD').replace(/[̀-ͯ]/g, '')
        correct = normalized === expected || normalizedNoAccents === expectedNoAccents
        break

      case 'multipleChoice':
        correct = selectedOption === item.answer
        break

      case 'matching':
        // For matching, check if all pairs are matched
        const allMatched = exercise.items.every(
          (i) => matchedPairs[i.question] === i.answer
        )
        correct = allMatched
        break
    }

    setIsCorrect(correct)
    setShowResult(true)
    if (correct) setScore(score + 1)

    setHistory([...history, { correct, question: item.question }])
  }

  const nextQuestion = () => {
    if (currentItemIdx < exercise.items.length - 1) {
      setCurrentItemIdx(currentItemIdx + 1)
    } else if (currentExerciseIdx < exercises.length - 1) {
      setCurrentExerciseIdx(currentExerciseIdx + 1)
      setCurrentItemIdx(0)
    } else {
      setCompleted(true)
      onComplete?.(score + (isCorrect ? 1 : 0), totalItems)
    }
    setUserAnswer('')
    setSelectedOption(null)
    setShowResult(false)
    setIsCorrect(false)
    setMatchedPairs({})
  }

  const getShuffledOptions = () => {
    // Create options from other items' answers plus correct answer
    const otherAnswers = exercise.items
      .filter((_, i) => i !== currentItemIdx)
      .map((i) => i.answer)
      .slice(0, 3)
    const options = [item.answer, ...otherAnswers]
    return options.sort(() => Math.random() - 0.5)
  }

  if (completed) {
    const percentage = Math.round((score / totalItems) * 100)
    return (
      <div className="bg-white rounded-xl border border-[#dde3f0] p-6 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
          style={{ backgroundColor: `${languageColor}20` }}
        >
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : '📝'}
        </div>
        <h3 className="font-bold text-[#1a2035] mb-2">¡Ejercicios completados!</h3>
        <p className="text-sm text-[#6b7a9e] mb-4">
          Puntuación: {score}/{totalItems} ({percentage}%)
        </p>
        <div className="space-y-2 mb-4">
          {history.map((h, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 text-sm ${h.correct ? 'text-green-600' : 'text-red-500'}`}
            >
              <span>{h.correct ? '✓' : '✗'}</span>
              <span className="truncate">{h.question}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setCompleted(false)
            setCurrentExerciseIdx(0)
            setCurrentItemIdx(0)
            setScore(0)
            setHistory([])
            setUserAnswer('')
            setShowResult(false)
          }}
          className="px-6 py-2.5 text-white text-sm font-bold rounded-lg transition hover:opacity-90"
          style={{ backgroundColor: languageColor }}
        >
          Intentar de nuevo
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-[#dde3f0] p-5">
      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-[#6b7a9e] mb-1">
          <span>Ejercicio {currentTotalIdx} de {totalItems}</span>
          <span>{score} correctas</span>
        </div>
        <div className="h-2 bg-[#f5f7fc] rounded-full overflow-hidden border border-[#dde3f0]">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${(currentTotalIdx / totalItems) * 100}%`, backgroundColor: languageColor }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7a9e] mb-2">
          {exercise.type === 'matching' && 'Emparejamiento'}
          {exercise.type === 'translation' && 'Traducción'}
          {exercise.type === 'fillBlank' && 'Completa la frase'}
          {exercise.type === 'multipleChoice' && 'Selecciona la respuesta correcta'}
        </p>

        {/* Different exercise types */}
        {exercise.type === 'fillBlank' ? (
          <p className="text-lg font-medium text-[#1a2035]">
            {item.question.split('_____').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="inline-block w-20 h-8 mx-1 border-b-2 border-[#1b3a6b] bg-[#f5f7fc] rounded"
/>
                )}
              </span>
            ))}
          </p>
        ) : exercise.type === 'matching' ? (
          <div className="space-y-3">
            <p className="text-sm text-[#6b7a9e] mb-3">Empareja cada palabra con su significado:</p>
            <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              {exercise.items.map((i, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border text-sm font-medium cursor-pointer transition-colors ${
                    matchedPairs[i.question]
                      ? 'bg-green-50 border-green-200 text-green-700'
                      : 'bg-[#f5f7fc] border-[#dde3f0] hover:border-[#1b3a6b]/30'
                  }`}
                  onClick={() => {
                    if (matchedPairs[i.question]) {
                      const newPairs = { ...matchedPairs }
                      delete newPairs[i.question]
                      setMatchedPairs(newPairs)
                    }
                  }}
                >
                  {i.question}
                  {matchedPairs[i.question] && (
                    <span className="block text-xs text-green-600 mt-1">→ {matchedPairs[i.question]}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[...exercise.items]
                .sort(() => Math.random() - 0.5)
                .map((i, idx) => (
                  <button
                    key={idx}
                    className={`w-full p-3 rounded-lg border text-sm transition-colors ${
                      Object.values(matchedPairs).includes(i.answer)
                        ? 'bg-green-50 border-green-200 text-green-700'
                        : 'bg-white border-[#dde3f0] hover:border-[#1b3a6b]/30'
                    }`}
                    onClick={() => {
                      // Find which question is selected (if any)
                      const selectedQuestion = Object.keys(matchedPairs).find(
                        k => matchedPairs[k] === undefined
                      )
                      if (selectedQuestion) {
                        setMatchedPairs({ ...matchedPairs, [selectedQuestion]: i.answer })
                      }
                    }}
                    disabled={Object.values(matchedPairs).includes(i.answer)}
                  >
                    {i.answer}
                  </button>
                ))}
            </div>
          </div>
          </div>
        ) : (
          <p className="text-lg font-medium text-[#1a2035]">{item.question}</p>
        )}
      </div>

      {/* Answer input */}
      {!showResult && exercise.type !== 'matching' && (
        <div className="space-y-3">
          {exercise.type === 'multipleChoice' ? (
            <div className="space-y-2">
              {getShuffledOptions().map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full p-3 text-left rounded-lg border text-sm transition-colors ${
                    selectedOption === option
                      ? 'border-[#1b3a6b] bg-[#f0f4ff]'
                      : 'border-[#dde3f0] hover:border-[#1b3a6b]/30'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && userAnswer.trim()) {
                  checkAnswer()
                }
              }}
              placeholder="Escribe tu respuesta..."
              className="w-full px-4 py-3 rounded-lg border border-[#dde3f0] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b]"
              autoFocus
            />
          )}
        </div>
      )}

      {/* Result */}
      {showResult && (
        <div
          className={`p-4 rounded-lg mb-4 ${
            isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {isCorrect ? '✓' : '✗'}
            </div>
            <div>
              <p className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
              </p>
              {!isCorrect && (
                <p className={`text-sm mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  La respuesta correcta es: <strong>{item.answer}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        {showResult ? (
          <button
            onClick={nextQuestion}
            className="flex-1 py-3 text-white font-bold rounded-lg text-sm transition hover:opacity-90"
            style={{ backgroundColor: languageColor }}
          >
            {currentItemIdx < exercise.items.length - 1 || currentExerciseIdx < exercises.length - 1
              ? 'Siguiente'
              : 'Ver resultados'}
          </button>
        ) : exercise.type === 'matching' ? (
          <button
            onClick={checkAnswer}
            disabled={Object.keys(matchedPairs).length !== exercise.items.length}
            className="flex-1 py-3 text-white font-bold rounded-lg text-sm transition hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: languageColor }}
          >
            Verificar
          </button>
        ) : (
          <button
            onClick={checkAnswer}
            disabled={exercise.type === 'multipleChoice' ? !selectedOption : !userAnswer.trim()}
            className="flex-1 py-3 text-white font-bold rounded-lg text-sm transition hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: languageColor }}
          >
            Verificar
          </button>
        )}
      </div>
    </div>
  )
}
