'use client'

import { Toaster as SonnerToaster } from 'sonner'

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#0e5c4a',
          color: '#fff',
          border: 'none',
        },
      }}
    />
  )
}
