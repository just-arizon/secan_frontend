// src/components/sections/Hero.jsx
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { User, CalendarCheck, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import heroImage1 from '@/assets/hero/lab-1.png'
import heroImage2 from '@/assets/hero/lab-2.jpeg'
import heroImage3 from '@/assets/hero/lab-3.jpeg'

const slides = [heroImage1, heroImage2, heroImage3]
const AUTOPLAY_INTERVAL = 4000

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (isPaused) return
    timeoutRef.current = setTimeout(next, AUTOPLAY_INTERVAL)
    return () => clearTimeout(timeoutRef.current)
  }, [current, isPaused, next])

  return (
    <section
      className="relative h-[420px] md:h-[480px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image (carousel) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(21,87,52,0.95) 0%, rgba(21,87,52,0.85) 20%, rgba(21,87,52,0.4) 50%, rgba(21,87,52,0.05) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Advancing Anatomical Sciences in Nigeria and Beyond
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 text-sm md:text-base mb-6"
          >
            Promoting excellence in anatomical research, education, innovation,
            mentorship and professional development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/membership/apply"
              className="flex items-center gap-2 border border-white text-white text-sm font-semibold px-4 py-2.5 rounded hover:bg-white/10 transition"
            >
              <User size={16} /> Become a Member
            </Link>
            <Link
              to="/events/conference"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2.5 rounded transition"
            >
              <CalendarCheck size={16} /> Register for Conference
            </Link>
            <Link
              to="/publications/jeca"
              className="flex items-center gap-2 border border-white text-white text-sm font-semibold px-4 py-2.5 rounded hover:bg-white/10 transition"
            >
              <BookOpen size={16} /> Explore JECA
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Carousel dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? 'bg-white w-6' : 'bg-white/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}