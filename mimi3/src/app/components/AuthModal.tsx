'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useAuth } from '../contexts/AuthContext'
interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode: 'login' | 'register'
  setMode: (mode: 'login' | 'register') => void
}

export default function AuthModal({ isOpen, onClose, mode, setMode }: AuthModalProps) {
   // Lokalne stany
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()

  useEffect(() => {
    setError('')
  }, [email, password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Logowanie
    if (mode === 'login') {
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action:'login', email, password }),
        })
        if (!res.ok) throw new Error('Invalid credentials')
          const user = await res.json()
        login(user)
        onClose()
      } catch (err) {
        setError('Incorrect email or password')
      }
    } else {
      // Rejestracja demo
      localStorage.setItem('user', JSON.stringify({ name, email, nfts: []}))
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <Image src="/icons/x.svg" width={20} height={20} alt="Close" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">
            {mode === 'login' ? 'Log in to your account' : 'Create an account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">
              {mode === 'login' ? 'Log in' : 'Sign up'}
            </button>
          </form>

          <div className="mt-4 text-center text-sm">
            {mode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <button onClick={() => setMode('register')} className="text-primary hover:underline">
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button onClick={() => setMode('login')} className="text-primary hover:underline">
                  Log in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
