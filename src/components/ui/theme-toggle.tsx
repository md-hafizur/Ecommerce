"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 rotate-90">
      <motion.button
        onClick={toggleTheme}
        className="relative w-20 h-10 rounded-full p-1 focus:outline-none focus:ring-4 transition-all duration-300 bg-gray-200 dark:bg-slate-700 focus:ring-blue-300/30 dark:focus:ring-purple-300/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={false}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-purple-600 dark:to-blue-600"
          animate={{
            opacity: isDark ? 0.6 : 0.8,
            scale: isDark ? 1.1 : 1.05,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Toggle slider */}
        <motion.div
          className="relative z-10 w-8 h-8 rounded-full shadow-lg flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-yellow-400 dark:border-purple-400"
          animate={{
            x: isDark ? 40 : 0,
            rotate: isDark ? 360 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            rotate: { duration: 0.6 },
          }}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="w-4 h-4 text-purple-300 rotate-270" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="w-4 h-4 text-yellow-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating particles effect */}
        <AnimatePresence>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${isDark ? "dark" : "light"}-${i}`}
              className="absolute w-1 h-1 rounded-full bg-yellow-300 dark:bg-purple-300"
              initial={{
                opacity: 0,
                scale: 0,
                x: 40,
                y: 20,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: 40 + (Math.random() - 0.5) * 60,
                y: 20 + (Math.random() - 0.5) * 60,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </AnimatePresence>
      </motion.button>

      {/* Optional tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/80 dark:bg-white/80 text-white dark:text-black text-sm rounded-lg whitespace-nowrap pointer-events-none"
      >
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </motion.div>
    </div>
  );
}
