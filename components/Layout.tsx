/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle"
import { Zap, Sparkles, LogIn, UserPlus, Lightbulb } from "lucide-react"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600 transition-colors duration-200">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
        .small-caps {
          font-variant: small-caps;
        }
      `}</style>
      {/* Header and navigation */}
      <header>{/* ... (header content remains the same) ... */}</header>

      <main className="flex-grow container mx-auto px-4 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer>{/* ... (footer content remains the same) ... */}</footer>
    </div>
  )
}