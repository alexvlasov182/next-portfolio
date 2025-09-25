/* eslint-disable @next/next/no-img-element */
'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50 cursor-pointer"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between border-b border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div>
        <Link
          href="/"
          className="flex items-center gap-2 font-medium text-black dark:text-white"
        >
          <span className="text-[18px] font-bold">Sascha Vlasov</span>
          {/* Light logo */}
          <img src="/react.svg" alt="React Logo" className="h-6 w-6" />

          <img src="/golang.svg" alt="Golang Logo" className="h-6 w-6 " />
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          React & React Native Engineer
        </TextEffect>
      </div>
      <div className="text-xs text-zinc-400">
        <ThemeSwitch />
      </div>
    </header>
  )
}
