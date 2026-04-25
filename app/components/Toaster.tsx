'use client'

import { Toaster as SonnerToaster } from 'sonner'

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#1b3a6b',
          color: '#fff',
          border: 'none',
        },
      }}
    />
  )
}
