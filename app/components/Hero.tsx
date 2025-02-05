"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeroProps {
  tokenPrice: string
  walletAddress: string | null
  onConnectWallet: () => void
}

export default function Hero({ tokenPrice, walletAddress, onConnectWallet }: HeroProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Initial dimensions
    updateDimensions()

    // Update dimensions on resize
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const generateRandomPosition = () => {
    // Generate a random starting X position across the full viewport width
    const startX = Math.random() * dimensions.width

    return {
      startX,
      y: -20, // Start above the viewport
      duration: Math.random() * 10 + 10, // Random duration between 10-20 seconds
    }
  }

  return (
    <section className="min-h-[60vh] pt-20 flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden relative">
      {/* Floating Crypto Icons Container */}
      <div className="absolute inset-0 w-full">
        {/* Generate 20 floating icons */}
        {dimensions.width > 0 &&
          [...Array(20)].map((_, i) => {
            const { startX, y, duration } = generateRandomPosition()
            return (
              <motion.div
                key={i}
                className="absolute text-2xl"
                initial={{
                  x: startX,
                  y,
                  opacity: 0,
                }}
                animate={{
                  y: dimensions.height + 20, // Animate to bottom of viewport
                  opacity: [0, 1, 1, 0],
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 10, // Random delay for more natural effect
                }}
                style={{
                  left: 0, // Position relative to container
                }}
              >
                {i % 3 === 0 ? "₿" : i % 3 === 1 ? "◎" : "🪙"}
              </motion.div>
            )
          })}
      </div>

      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="mb-8 relative w-64 h-64 mx-auto"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepe-1dSFr1SvCB9KTycXvT1tAqt1jVzKS9.png"
              alt="PepeFrog Hero"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
        >
          PepeFrog Coin
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          The Most Magical Meme Coin on Solana
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-x-4"
        >
          <button
            onClick={onConnectWallet}
            className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 transition-colors transform hover:scale-105"
          >
            {walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...` : "Connect Wallet"}
          </button>
          <a
            href="#buy"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-400 transition-colors transform hover:scale-105 inline-block"
          >
            Get Started
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-lg mb-4"
        >
          <div className="flex items-center justify-center space-x-2">
            <span>PEPEF Price:</span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="font-bold text-green-400"
            >
              {tokenPrice}
            </motion.span>
            <span>SOL</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

