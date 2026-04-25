'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const ONBOARDING_KEY = 'astro-maya-onboarding-completed'

const STEPS = [
  {
    title: '¡Bienvenido a Astro Maya!',
    description: 'Tu viaje para aprender idiomas mayas de Guatemala comienza aquí. Descubre K\'iche\', Q\'eqchi\', Kaqchikel, Mam y Tz\'utujil.',
    icon: '🌟',
    color: '#1b3a6b',
  },
  {
    title: 'Crea tu primer proyecto',
    description: 'Elige un idioma y el tipo de ruta que quieres seguir. Te ayudaremos a organizar tu aprendizaje paso a paso.',
    icon: '🎯',
    color: '#c8a217',
  },
  {
    title: 'Completa tu primera lección',
    description: 'Gana XP, mantén tu racha de días y desbloquea skills mientras aprendes vocabulario, frases y cultura maya.',
    icon: '🏆',
    color: '#22c55e',
  },
]

export function Onboarding() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Check if user has seen onboarding
    const hasCompleted = localStorage.getItem(ONBOARDING_KEY)
    if (!hasCompleted) {
      setShowOnboarding(true)
    }
  }, [])

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeOnboarding()
    }
  }

  const handleSkip = () => {
    completeOnboarding()
  }

  const completeOnboarding = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true')
    setShowOnboarding(false)
  }

  // Reset onboarding (useful for testing or if user wants to see it again)
  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_KEY)
    setCurrentStep(0)
    setShowOnboarding(true)
  }

  if (!isClient || !showOnboarding) return null

  const step = STEPS[currentStep]
  const progress = ((currentStep + 1) / STEPS.length) * 100

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Progress bar */}
        <div className="h-1 bg-[#f5f7fc]">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: step.color }}
          />
        </div>

        <div className="p-6 text-center">
          {/* Step indicator */}
          <div className="flex justify-center gap-2 mb-6">
            {STEPS.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentStep ? 'bg-[#1b3a6b]' : idx < currentStep ? 'bg-[#1b3a6b]/50' : 'bg-[#dde3f0]'
                }`}
              />
            ))}
          </div>

          {/* Icon */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl"
            style={{ backgroundColor: `${step.color}20` }}
          >
            {step.icon}
          </div>

          {/* Content */}
          <h2 className="text-xl font-bold text-[#1a2035] mb-2">{step.title}</h2>
          <p className="text-sm text-[#6b7a9e] leading-relaxed mb-6">{step.description}</p>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleNext}
              className="w-full py-3 text-white font-bold rounded-xl text-sm transition hover:opacity-90"
              style={{ backgroundColor: step.color }}
            >
              {currentStep === STEPS.length - 1 ? '¡Empezar!' : 'Siguiente'}
            </button>

            {currentStep === STEPS.length - 1 ? (
              <Link
                href="/dashboard/proyectos"
                onClick={completeOnboarding}
                className="w-full py-2 text-[#6b7a9e] hover:text-[#1b3a6b] text-sm font-medium"
              >
                Crear mi primer proyecto →
              </Link>
            ) : (
              <button
                onClick={handleSkip}
                className="text-sm text-[#6b7a9e] hover:text-[#1b3a6b] font-medium"
              >
                Saltar tutorial
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper component to show a "Show tutorial again" button in settings
export function OnboardingReset() {
  const handleReset = () => {
    localStorage.removeItem(ONBOARDING_KEY)
    window.location.reload()
  }

  return (
    <button
      onClick={handleReset}
      className="text-sm text-[#6b7a9e] hover:text-[#1b3a6b] underline"
    >
      Ver tutorial de bienvenida
    </button>
  )
}
