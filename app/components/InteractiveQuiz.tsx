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

// Orden fijo pero distinto del original: si se barajara con Math.random() en cada render,
// las opciones cambiarían de lugar con cada clic.
function mezclar(textos: string[]) {
  const peso = (t: string) => [...t].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7)
  const out = [...textos].sort((a, b) => peso(a) - peso(b))
  return out.every((t, i) => t === textos[i]) && out.length > 1 ? [...out.slice(1), out[0]] : out
}

interface InteractiveQuizProps {
  exercises: Exercise[]
  languageColor?: string
  onComplete?: (score: number, total: number) => void
}

export function InteractiveQuiz({ exercises, languageColor = '#0e5c4a', onComplete }: InteractiveQuizProps) {
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0)
  const [currentItemIdx, setCurrentItemIdx] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({})
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
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

      case 'matching': {
        // Cada par cuenta como un acierto; el ejercicio completo es un solo paso.
        const results = exercise.items.map((i) => ({
          correct: matchedPairs[i.question] === i.answer,
          question: `${i.question} → ${i.answer}`,
        }))
        const hits = results.filter((r) => r.correct).length
        setIsCorrect(hits === results.length)
        setShowResult(true)
        setScore(score + hits)
        setHistory([...history, ...results])
        return
      }
    }

    setIsCorrect(correct)
    setShowResult(true)
    if (correct) setScore(score + 1)

    setHistory([...history, { correct, question: item.question }])
  }

  const nextQuestion = () => {
    if (exercise.type !== 'matching' && currentItemIdx < exercise.items.length - 1) {
      setCurrentItemIdx(currentItemIdx + 1)
    } else if (currentExerciseIdx < exercises.length - 1) {
      setCurrentExerciseIdx(currentExerciseIdx + 1)
      setCurrentItemIdx(0)
    } else {
      setCompleted(true)
      // `score` ya incluye el acierto de esta pregunta (se sumó en checkAnswer).
      onComplete?.(score, totalItems)
    }
    setUserAnswer('')
    setSelectedOption(null)
    setShowResult(false)
    setIsCorrect(false)
    setMatchedPairs({})
    setSelectedLeft(null)
  }

  const getShuffledOptions = () => {
    // Create options from other items' answers plus correct answer
    const otherAnswers = exercise.items
      .filter((_, i) => i !== currentItemIdx)
      .map((i) => i.answer)
      .slice(0, 3)
    return mezclar([item.answer, ...otherAnswers])
  }

  const matchedAnswers = Object.values(matchedPairs)
  const pairNumber = (question: string) => Object.keys(matchedPairs).indexOf(question) + 1

  const pickRight = (answer: string) => {
    if (!selectedLeft || matchedAnswers.includes(answer)) return
    setMatchedPairs({ ...matchedPairs, [selectedLeft]: answer })
    // Pasa sola a la siguiente palabra sin pareja.
    const next = exercise.items.find((i) => i.question !== selectedLeft && !matchedPairs[i.question])
    setSelectedLeft(next?.question ?? null)
  }

  const pickLeft = (question: string) => {
    if (showResult) return
    if (matchedPairs[question]) {
      const newPairs = { ...matchedPairs }
      delete newPairs[question]
      setMatchedPairs(newPairs)
    }
    setSelectedLeft(question)
  }

  if (completed) {
    const percentage = Math.round((score / totalItems) * 100)
    return (
      <div className="bg-white rounded-xl border border-[#e4e2da] p-6 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
          style={{ backgroundColor: `${languageColor}20` }}
        >
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : '📝'}
        </div>
        <h3 className="font-bold text-[#14181f] mb-2">¡Ejercicios completados!</h3>
        <p className="text-sm text-[#5e6673] mb-4">
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
            setMatchedPairs({})
            setSelectedLeft(null)
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
    <div className="bg-white rounded-xl border border-[#e4e2da] p-5">
      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-[#5e6673] mb-1">
          <span>Ejercicio {currentTotalIdx} de {totalItems}</span>
          <span>{score} correctas</span>
        </div>
        <div className="h-2 bg-[#f6f5f1] rounded-full overflow-hidden border border-[#e4e2da]">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${(currentTotalIdx / totalItems) * 100}%`, backgroundColor: languageColor }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#5e6673] mb-2">
          {exercise.type === 'matching' && 'Emparejamiento'}
          {exercise.type === 'translation' && 'Traducción'}
          {exercise.type === 'fillBlank' && 'Completa la frase'}
          {exercise.type === 'multipleChoice' && 'Selecciona la respuesta correcta'}
        </p>

        {/* Different exercise types */}
        {exercise.type === 'fillBlank' ? (
          <p className="text-lg font-medium text-[#14181f]">
            {item.question.split('_____').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="inline-block w-20 h-8 mx-1 border-b-2 border-[#0e5c4a] bg-[#f6f5f1] rounded"
/>
                )}
              </span>
            ))}
          </p>
        ) : exercise.type === 'matching' ? (
          <div>
            <ol className="text-sm text-[#4a5260] mb-4 space-y-0.5 list-decimal list-inside">
              <li>Toca una palabra de la <strong className="text-[#14181f]">izquierda</strong>.</li>
              <li>Toca su significado a la <strong className="text-[#14181f]">derecha</strong>. Quedan unidos con el mismo número.</li>
              <li>¿Te equivocaste? Toca la palabra otra vez para deshacer el par.</li>
            </ol>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                {exercise.items.map((i) => {
                  const n = pairNumber(i.question)
                  const selected = selectedLeft === i.question
                  return (
                    <button
                      key={i.question}
                      type="button"
                      onClick={() => pickLeft(i.question)}
                      aria-pressed={selected}
                      className={`w-full flex items-center justify-between gap-2 p-3 rounded-lg border-2 text-left text-sm font-semibold transition-colors ${
                        selected
                          ? 'border-[#0e5c4a] bg-[#e8f1ee] text-[#0a4337]'
                          : n
                            ? 'border-[#e4e2da] bg-[#f6f5f1] text-[#14181f]'
                            : 'border-[#e4e2da] bg-white text-[#14181f] hover:border-[#0e5c4a]/40'
                      }`}
                    >
                      {i.question}
                      {n > 0 && (
                        <span className="w-6 h-6 shrink-0 rounded-full bg-[#0e5c4a] text-white text-xs flex items-center justify-center">{n}</span>
                      )}
                    </button>
                  )
                })}
              </div>
              <div className="space-y-2">
                {mezclar(exercise.items.map((i) => i.answer)).map((answer) => {
                  const owner = Object.keys(matchedPairs).find((q) => matchedPairs[q] === answer)
                  const n = owner ? pairNumber(owner) : 0
                  return (
                    <button
                      key={answer}
                      type="button"
                      onClick={() => pickRight(answer)}
                      disabled={n > 0 || !selectedLeft || showResult}
                      className={`w-full flex items-center justify-between gap-2 p-3 rounded-lg border-2 text-left text-sm transition-colors ${
                        n
                          ? 'border-[#e4e2da] bg-[#f6f5f1] text-[#14181f]'
                          : selectedLeft
                            ? 'border-[#e4e2da] bg-white text-[#14181f] hover:border-[#0e5c4a] cursor-pointer'
                            : 'border-[#e4e2da] bg-white text-[#5e6673]'
                      }`}
                    >
                      {answer}
                      {n > 0 && (
                        <span className="w-6 h-6 shrink-0 rounded-full bg-[#0e5c4a] text-white text-xs flex items-center justify-center">{n}</span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
            {!showResult && (
              <p className="text-xs text-[#5e6673] mt-3" aria-live="polite">
                {selectedLeft
                  ? <>Ahora elige el significado de <strong className="text-[#14181f]">{selectedLeft}</strong>.</>
                  : matchedAnswers.length === exercise.items.length
                    ? 'Listo. Pulsa «Verificar» para ver cuántos acertaste.'
                    : 'Empieza tocando una palabra de la izquierda.'}
              </p>
            )}
          </div>
        ) : (
          <p className="text-lg font-medium text-[#14181f]">{item.question}</p>
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
                      ? 'border-[#0e5c4a] bg-[#e8f1ee]'
                      : 'border-[#e4e2da] hover:border-[#0e5c4a]/30'
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
              className="w-full px-4 py-3 rounded-lg border border-[#e4e2da] focus:outline-none focus:border-[#0e5c4a] focus:ring-1 focus:ring-[#0e5c4a]"
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
                {exercise.type === 'matching'
                  ? isCorrect
                    ? '¡Todos los pares son correctos!'
                    : `${exercise.items.filter((i) => matchedPairs[i.question] === i.answer).length} de ${exercise.items.length} pares correctos`
                  : isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
              </p>
              {!isCorrect && exercise.type === 'matching' && (
                <ul className="text-sm mt-1 text-red-600 space-y-0.5">
                  {exercise.items
                    .filter((i) => matchedPairs[i.question] !== i.answer)
                    .map((i) => (
                      <li key={i.question}><strong>{i.question}</strong> = {i.answer}</li>
                    ))}
                </ul>
              )}
              {!isCorrect && exercise.type !== 'matching' && (
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
            {(exercise.type !== 'matching' && currentItemIdx < exercise.items.length - 1) || currentExerciseIdx < exercises.length - 1
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
