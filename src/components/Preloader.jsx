/* app/components/preloader.tsx */
import { useNavigation } from "react-router-dom"; // ← correct import
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const nav = useNavigation();
  const visible = nav.state !== "idle"; // "submitting" | "loading" → show

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}