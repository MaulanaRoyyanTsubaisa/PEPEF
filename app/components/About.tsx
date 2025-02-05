"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-12 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 pt-4" // Updated className
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            About PepeFrog Coin
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the most vibrant meme coin community on Solana. PepeFrog Coin combines humor with real utility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Our Vision</h3>
              <p className="text-gray-300">
                PepeFrog Coin aims to bring the magic of memes to the Solana blockchain. We believe in the power of
                community-driven cryptocurrencies and the potential for meme coins to revolutionize the financial
                landscape.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Community First</h3>
              <p className="text-gray-300">
                Our community is at the heart of everything we do. PepeFrog holders get exclusive access to:
              </p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  Governance voting rights
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  Community events and giveaways
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepe-1dSFr1SvCB9KTycXvT1tAqt1jVzKS9.png"
                  alt="PepeFrog Mascot"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            <div className="absolute -bottom-8 left-0 right-0">
              <motion.div
                className="bg-gray-800 p-6 rounded-xl border border-green-500/20 mx-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-green-400">Why PepeFrog?</h3>
                <p className="text-gray-300">
                  PepeFrog combines the viral nature of meme culture with the speed and efficiency of the Solana
                  blockchain. Our goal is to create a fun, engaging, and potentially profitable experience for our
                  community members.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32 text-center"
        >
          <div className="bg-gray-800 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-3xl font-bold text-green-400">24/7</h4>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-green-500/20">
            <h4 className="text-3xl font-bold text-green-400">100%</h4>
            <p className="text-gray-400 mt-2">Community</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

