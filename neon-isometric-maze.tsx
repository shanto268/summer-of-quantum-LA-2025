'use client'

import type React from 'react'
import { useEffect, useRef } from 'react'

interface NeonIsometricMazeProps {
  title?: string
  subtitle?: string
}

const NeonIsometricMaze: React.FC<NeonIsometricMazeProps> = ({
  title = 'Summer of Quantum in LA 🌴',
  subtitle = 'From Hollywood to Hilbert Space',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const x = canvas.getContext('2d')
    if (!x) return

    let t = 0
    let animationFrameId: number

    const r = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      d()
    }

    const d = () => {
      if (!canvas || !x) return
      const s = Math.min(canvas.width, canvas.height) / 15
      const g = Math.ceil(canvas.width / s) * 2
      const h = Math.ceil(canvas.height / (s * 0.5)) * 2
      const w = canvas.width / 2
      const v = canvas.height / 2

      // Draw palm tree silhouettes in background
      drawPalmTrees(x, canvas.width, canvas.height)

      // Draw Griffith Observatory silhouette
      drawGriffithSilhouette(x, canvas.width, canvas.height)

      for (let y = -h; y < h; y++) {
        for (let i = -g; i < g; i++) {
          const p = w + ((i - y) * s) / 2
          const q = v + ((i + y) * s) / 4
          const m = Math.sqrt(i * i + y * y)
          const n = Math.sqrt(g * g + h * h)
          const e = 1 - m / n
          const f = s * e * Math.abs(Math.sin(m * 0.5 + t))

          x.beginPath()
          x.moveTo(p, q - f)
          x.lineTo(p + s / 2, q - s / 2 - f)
          x.lineTo(p + s, q - f)
          x.lineTo(p + s, q)
          x.lineTo(p + s / 2, q + s / 2)
          x.lineTo(p, q)
          x.closePath()

          // LA sunset gradient colors - lighter for better contrast
          const l = x.createLinearGradient(p, q - f, p + s, q)
          l.addColorStop(0, 'rgba(255,179,71,.6)') // LA Sunset
          l.addColorStop(0.5, 'rgba(255,227,236,.6)') // LA Blush
          l.addColorStop(1, 'rgba(227,141,234,.6)') // LA Dusk
          x.fillStyle = l
          x.fill()
          x.strokeStyle = 'rgba(255,223,0,.3)' // Gold
          x.stroke()

          x.beginPath()
          x.moveTo(p, q)
          x.lineTo(p, q - f)
          x.moveTo(p + s, q)
          x.lineTo(p + s, q - f)
          x.moveTo(p + s / 2, q + s / 2)
          x.lineTo(p + s / 2, q - s / 2 - f)
          x.strokeStyle = 'rgba(255,255,255,.2)'
          x.stroke()
        }
      }
    }

    const drawPalmTrees = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
    ) => {
      ctx.save()
      ctx.globalAlpha = 0.1

      // Draw several palm trees as silhouettes
      for (let i = 0; i < 5; i++) {
        const x = width * (0.1 + i * 0.2)
        const y = height * 0.8
        const size = height * 0.15

        // Trunk
        ctx.fillStyle = 'rgba(30,30,30,0.5)'
        ctx.beginPath()
        ctx.moveTo(x - size / 20, y)
        ctx.lineTo(x + size / 20, y)
        ctx.lineTo(x + size / 30, y - size / 2)
        ctx.lineTo(x - size / 30, y - size / 2)
        ctx.closePath()
        ctx.fill()

        // Leaves
        ctx.fillStyle = 'rgba(30,30,30,0.5)'
        for (let j = 0; j < 7; j++) {
          const angle = (j / 7) * Math.PI * 2
          ctx.beginPath()
          ctx.moveTo(x, y - size / 2)
          ctx.quadraticCurveTo(
            x + (Math.cos(angle) * size) / 2,
            y - size / 2 - (Math.sin(angle) * size) / 2,
            x + Math.cos(angle) * size,
            y - size / 2 - (Math.sin(angle) * size) / 3,
          )
          ctx.quadraticCurveTo(
            x + (Math.cos(angle) * size) / 1.5,
            y - size / 2 - (Math.sin(angle) * size) / 1.5,
            x,
            y - size / 2,
          )
          ctx.closePath()
          ctx.fill()
        }
      }

      ctx.restore()
    }

    const drawGriffithSilhouette = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
    ) => {
      ctx.save()
      ctx.globalAlpha = 0.1

      // Draw Griffith Observatory silhouette
      const baseY = height * 0.75
      const baseWidth = width * 0.3
      const baseHeight = height * 0.1
      const domeRadius = baseHeight * 0.8
      const x = width * 0.7

      ctx.fillStyle = 'rgba(30,30,30,0.5)'

      // Main building
      ctx.beginPath()
      ctx.rect(x - baseWidth / 2, baseY - baseHeight, baseWidth, baseHeight)
      ctx.fill()

      // Central dome
      ctx.beginPath()
      ctx.arc(x, baseY - baseHeight, domeRadius, Math.PI, 0, false)
      ctx.fill()

      // Side domes
      ctx.beginPath()
      ctx.arc(
        x - baseWidth / 3,
        baseY - baseHeight,
        domeRadius / 2,
        Math.PI,
        0,
        false,
      )
      ctx.fill()

      ctx.beginPath()
      ctx.arc(
        x + baseWidth / 3,
        baseY - baseHeight,
        domeRadius / 2,
        Math.PI,
        0,
        false,
      )
      ctx.fill()

      ctx.restore()
    }

    const a = () => {
      if (!canvas || !x) return
      x.fillStyle = 'rgba(255,255,255,.2)'
      x.fillRect(0, 0, canvas.width, canvas.height)
      d()
      t += 0.05
      animationFrameId = requestAnimationFrame(a)
    }

    window.addEventListener('resize', r)
    r()
    a()

    return () => {
      window.removeEventListener('resize', r)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-la-sky/30">
      <canvas
        ref={canvasRef}
        className="block absolute inset-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Clean, flat title text directly on the background */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk font-heading">
          {title}
        </h1>

        {/* Clean, flat subtitle text directly on the background */}
        <p className="text-xl md:text-2xl text-[#FF8C00] max-w-2xl font-body flex items-center justify-center gap-2 mt-4">
          <span className="text-2xl">🎬</span> {subtitle}{' '}
          <span className="font-mono text-2xl">ℋ</span>
        </p>

        <div className="mt-8">
          <a
            href="#event-overview"
            className="px-6 py-2 text-sm rounded-full bg-gradient-to-r from-la-coral via-la-sunset to-la-dusk text-white font-medium shadow-sm hover:scale-105 transition-transform inline-block"
          >
            Explore Events <span className="ml-2">✨</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  )
}

export default NeonIsometricMaze
