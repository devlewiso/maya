'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const SYSTEM_PROMPT = `Eres Ix'im, asistente virtual de Astro Maya. Tu misión es ayudar a los usuarios a aprender y explorar los idiomas mayas de Guatemala: K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil. Responde siempre en español. Eres amable, paciente y culturalmente respetuoso. Puedes enseñar vocabulario, frases, pronunciación y compartir notas culturales sobre el pueblo maya de Guatemala. Si no sabes algo específico, invita al usuario a explorar las lecciones en la plataforma.`

const WS_URL = 'wss://agentclaw.nosotros.space'
const SESSION_KEY = 'astromaya_chat_session'

type Message = {
  id: string
  role: 'user' | 'bot'
  text: string
}

type WsStatus = 'connecting' | 'connected' | 'disconnected'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [status, setStatus] = useState<WsStatus>('disconnected')
  const [rateLimited, setRateLimited] = useState(false)

  const ws = useRef<WebSocket | null>(null)
  const sessionId = useRef<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const reconnectTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing, scrollToBottom])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const connect = useCallback(() => {
    if (ws.current?.readyState === WebSocket.OPEN) return

    setStatus('connecting')
    const socket = new WebSocket(WS_URL)
    ws.current = socket

    socket.onopen = () => {
      setStatus('connected')
    }

    socket.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data)

        if (data.type === 'connected') {
          const stored = localStorage.getItem(SESSION_KEY)
          if (!stored) {
            localStorage.setItem(SESSION_KEY, data.session_id)
          }
          sessionId.current = stored ?? data.session_id
          setMessages([{
            id: 'welcome',
            role: 'bot',
            text: "Saqarik! Soy Ix'im, tu asistente de idiomas mayas. ¿Qué idioma te gustaría explorar hoy?",
          }])
        }

        if (data.type === 'typing') {
          setTyping(true)
        }

        if (data.type === 'message') {
          setTyping(false)
          setMessages(prev => [...prev, {
            id: crypto.randomUUID(),
            role: 'bot',
            text: data.reply,
          }])
        }
      } catch {}
    }

    socket.onclose = () => {
      setStatus('disconnected')
      reconnectTimeout.current = setTimeout(connect, 3000)
    }

    socket.onerror = () => {
      socket.close()
    }
  }, [])

  useEffect(() => {
    if (open && status === 'disconnected') {
      connect()
    }
    return () => {
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current)
    }
  }, [open, status, connect])

  async function sendMessage() {
    const text = input.trim()
    if (!text || status !== 'connected') return

    setInput('')
    setRateLimited(false)
    setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'user', text }])

    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify({ message: text, system_prompt: SYSTEM_PROMPT }))
    } else {
      // Fallback HTTP
      setTyping(true)
      try {
        const res = await fetch('https://agentclaw.nosotros.space/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sessionId.current ?? localStorage.getItem(SESSION_KEY) ?? crypto.randomUUID(),
            message: text,
            system_prompt: SYSTEM_PROMPT,
          }),
        })
        if (res.status === 429) {
          setRateLimited(true)
          setTyping(false)
          return
        }
        const { reply } = await res.json()
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'bot', text: reply }])
      } catch {
        setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'bot', text: 'Hubo un problema de conexión. Intenta de nuevo.' }])
      } finally {
        setTyping(false)
      }
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Ventana del chat */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-[350px] max-w-[calc(100vw-2rem)] flex flex-col shadow-2xl rounded-2xl overflow-hidden border border-[#dde3f0]"
          style={{ height: '480px' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#1b3a6b] flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#c8a217] flex items-center justify-center text-sm font-bold text-[#0f2347]">
              ◆
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-none">Ix&apos;im</p>
              <p className="text-[#c8a217] text-[10px] mt-0.5">
                {status === 'connected' ? '● En línea' : status === 'connecting' ? '○ Conectando...' : '○ Desconectado'}
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white text-xl leading-none">
              ×
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto bg-[#f5f7fc] px-4 py-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#1b3a6b] text-white rounded-br-sm'
                      : 'bg-white text-[#1a2035] border border-[#dde3f0] rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#dde3f0] px-3 py-2 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-[#6b7a9e] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#6b7a9e] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#6b7a9e] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {rateLimited && (
              <div className="text-center text-[11px] text-orange-600 bg-orange-50 border border-orange-100 rounded-lg px-3 py-2">
                Demasiados mensajes. Espera un momento.
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex-shrink-0 bg-white border-t border-[#dde3f0] px-3 py-3 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Escribe tu mensaje..."
              disabled={status !== 'connected'}
              className="flex-1 text-sm px-3 py-2 rounded-lg border border-[#dde3f0] bg-[#f5f7fc] focus:outline-none focus:border-[#1b3a6b] focus:ring-1 focus:ring-[#1b3a6b] disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || status !== 'connected'}
              className="w-9 h-9 rounded-lg bg-[#1b3a6b] text-white flex items-center justify-center hover:bg-[#254d8f] transition disabled:opacity-40 flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-[#1b3a6b] text-white shadow-lg hover:bg-[#254d8f] transition-all flex items-center justify-center"
        aria-label="Abrir chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  )
}
