"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const About = () => {
  const router = useRouter()
  return (
    <div>
      <h1>About</h1>
      <button type="button" onClick={() => router.push('/')}>
        Click me
      </button>
    </div>
  )
}

export default About
