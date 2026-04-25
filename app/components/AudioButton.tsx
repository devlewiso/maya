'use client'

import { useState, useRef } from 'react'

interface AudioButtonProps {
  text: string
  lang?: string
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export function AudioButton({ text, lang = 'es-GT', size = 'md', color = '#1b3a6b' }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  const playAudio = async () => {
    // Try Web Speech API first
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      utterance.rate = 0.8 // Slightly slower for language learning

      utterance.onstart = () => setIsPlaying(true)
      utterance.onend = () => setIsPlaying(false)
      utterance.onerror = () => setIsPlaying(false)

      window.speechSynthesis.speak(utterance)
    } else {
      // Fallback: show coming soon message
      console.log('Audio playback not supported')
    }
  }

  return (
    <button
      onClick={playAudio}
      disabled={isPlaying}
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-70`}
      style={{
        backgroundColor: `${color}15`,
        color: color,
      }}
      title="Escuchar pronunciación"
      aria-label={`Reproducir audio de ${text}`}
    >
      {isPlaying ? (
        <span className="flex gap-0.5">
          <span
            className={`${iconSizes[size]} rounded-full bg-current animate-bounce`}
            style={{ animationDelay: '0ms' }}
          />
          <span
            className={`${iconSizes[size]} rounded-full bg-current animate-bounce`}
            style={{ animationDelay: '150ms' }}
          />
          <span
            className={`${iconSizes[size]} rounded-full bg-current animate-bounce`}
            style={{ animationDelay: '300ms' }}
          />
        </span>
      ) : (
        <svg
          className={iconSizes[size]}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      )}
    </button>
  )
}
