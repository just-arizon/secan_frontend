// src/components/ui/Preloader.jsx
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader({ overlay = false }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={
          overlay
            ? 'fixed inset-0 z-[100] bg-white/80 backdrop-blur-sm flex items-center justify-center'
            : 'fixed inset-0 z-[100] bg-white flex items-center justify-center'
        }
      >
        <div className="w-10 h-10 border-4 border-green-700 border-t-transparent rounded-full animate-spin" />
      </motion.div>
    </AnimatePresence>
  )
}