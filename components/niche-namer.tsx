'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lightbulb, Loader2, ThumbsUp, ThumbsDown, Copy, Check, Zap, Sparkles, Search, LogIn, UserPlus, Star, Filter, RefreshCw } from "lucide-react"
import { ShareButton } from './ShareButton'
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle"
import Link from 'next/link'

type GeneratedName = {
  id: string;
  name: string;
  model: string;
  critique: string;
  likes: number;
  dislikes: number;
  isFavorite: boolean;
  isLoading: boolean;
};

export function NicheNamer() {
  const [industry, setIndustry] = useState('');
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'likes' | 'dislikes' | 'model' | 'none'>('none');
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [shareLink] = useState('https://g-3fgi6ulfg3z.vusercontent.net/p/8oyGraRZSJF?c=1&flags=1&bid=KPhXoDO')

  const generateNames = () => {
    setIsLoading(true)
    setError(null)
    // Simulating API call with setTimeout
    setTimeout(() => {
      try {
        const names = [
          { id: '1', name: `${industry} Innovators`, model: "GPT-3", critique: "Lacks originality - ChatGPT" },
          { id: '2', name: `${industry} Pioneers`, model: "DALL-E", critique: "Too generic - Stable Diffusion" },
          { id: '3', name: `${industry} Nexus`, model: "Stable Diffusion", critique: "Unclear meaning - GPT-3" },
          { id: '4', name: `${industry} Pulse`, model: "ChatGPT", critique: "Overused concept - DALL-E" },
          { id: '5', name: `${industry} Forge`, model: "GPT-4", critique: "Doesn't reflect industry - Stable Diffusion" },
          { id: '6', name: `${industry} Horizon`, model: "Claude", critique: "Too abstract - GPT-4" }
        ]
        setGeneratedNames(names.map(item => ({ ...item, likes: 0, dislikes: 0, isFavorite: false, isLoading: false })))
      } catch (err) {
        setError("Failed to generate names. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }, 1500)
  }

  const handleLike = (id: string) => {
    setGeneratedNames(prevNames =>
      prevNames.map(name =>
        name.id === id ? { ...name, likes: name.likes + 1 } : name
      )
    )
  }

  const handleDislike = (id: string) => {
    setGeneratedNames(prevNames =>
      prevNames.map(name =>
        name.id === id ? { ...name, dislikes: name.dislikes + 1 } : name
      )
    )
  }

  const toggleFavorite = (id: string) => {
    setGeneratedNames(prevNames =>
      prevNames.map(name =>
        name.id === id ? { ...name, isFavorite: !name.isFavorite } : name
      )
    )
  }

  const handleCopy = (name: string, id: string) => {
    navigator.clipboard.writeText(name).then(() => {
      setCopiedStates(prev => ({ ...prev, [id]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }))
      }, 2000)
    })
  }

  const regenerateCard = (id: string) => {
    setGeneratedNames(prevNames =>
      prevNames.map(name => {
        if (name.id === id) {
          return {
            ...name,
            name: `${industry} ${Math.random().toString(36).substring(7)}`, // Generate a new random name
            model: ["GPT-3", "DALL-E", "Stable Diffusion", "ChatGPT", "GPT-4", "Claude"][Math.floor(Math.random() * 6)], // Randomly select a model
            critique: `New critique for ${name.name} - ${Math.random().toString(36).substring(7)}`,
            likes: 0,
            dislikes: 0,
            isFavorite: false,
          }
        }
        return name
      })
    )
  }

  const sortedAndFilteredNames = generatedNames
    .filter(name => !filterFavorites || name.isFavorite)
    .sort((a, b) => {
      if (sortBy === 'likes') return b.likes - a.likes
      if (sortBy === 'dislikes') return b.dislikes - a.dislikes
      if (sortBy === 'model') return a.model.localeCompare(b.model)
      return 0 // 'none' case: no sorting
    })

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
      <header className="bg-white dark:bg-gray-900 bg-opacity-90 shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center tracking-wider">
              <Zap className="mr-2 h-8 w-8 text-gray-600 dark:text-gray-400" />
              <span className="font-bold tracking-widest small-caps">NicheNamer</span>
            </h1>
          </div>
          <nav className="hidden sm:flex space-x-6">
            <Link href="/" passHref>
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 flex items-center transition-colors duration-200">
                <Sparkles className="mr-1 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/login" passHref>
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 flex items-center transition-colors duration-200">
                <LogIn className="mr-1 h-4 w-4" />
                Log in
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="outline" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 flex items-center transition-colors duration-200">
                <UserPlus className="mr-1 h-4 w-4" />
                Sign up
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 flex items-center transition-colors duration-200">
                <Lightbulb className="mr-1 h-4 w-4" />
                About
              </Button>
            </Link>
          </nav>
          <DarkModeToggle />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-2 leading-tight">Generate Unique Business Names</CardTitle>
            <CardDescription className="text-center text-gray-600 dark:text-gray-400 font-medium text-lg">Enter your big idea and let AI create perfect names for you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <Input
                  type="text"
                  placeholder="Enter your industry, product, niche, etc."
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full text-base sm:text-lg py-3 pl-10 pr-4 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 rounded-lg shadow-sm transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  style={{ lineHeight: '1.6', letterSpacing: '0.01em' }}
                  maxLength={50}
                  aria-label="Enter your industry or product type"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm">
                  {industry.length}/50
                </span>
              </div>
              <div className="flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        onClick={generateNames} 
                        disabled={!industry || isLoading}
                        className="flex-grow h-14 sm:h-16 text-lg sm:text-xl font-medium text-white bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 dark:from-gray-600 dark:to-gray-400 dark:hover:from-gray-500 dark:hover:to-gray-300 transition-all duration-300 transform hover:scale-105 hover:brightness-110 rounded-lg shadow-md"
                        aria-label="Generate unique business names"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Lightbulb className="mr-2 h-6 w-6" />
                            Generate Unique Names
                          </>
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to generate unique business names</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <ShareButton shareLink={shareLink} />
              </div>
            </div>
            {error && (
              <div className="text-red-500 text-center">{error}</div>
            )}
            {generatedNames.length > 0 && (
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">Generated Names:</h3>
                  <div className="flex space-x-2">
                    <Select onValueChange={(value: 'likes' | 'dislikes' | 'model' | 'none') => setSortBy(value)}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Sort by None</SelectItem>
                        <SelectItem value="likes">Sort by Likes</SelectItem>
                        <SelectItem value="dislikes">Sort by Dislikes</SelectItem>
                        <SelectItem value="model">Sort by Model</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFilterFavorites(!filterFavorites)}
                      aria-label="Filter favorites"
                    >
                      <Filter className="h-4 w-4 mr-1" />
                      {filterFavorites ? 'Show All' : 'Show Favorites'}
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sortedAndFilteredNames.map((item) => (
                    <Card key={item.id} className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                      <CardContent className="p-4 flex flex-col justify-between h-full relative">
                        {item.isLoading ? (
                          <div className="flex items-center justify-center h-full">
                            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                          </div>
                        ) : (
                          <>
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.name}</h4>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => regenerateCard(item.id)}
                                        aria-label={`Regenerate ${item.name}`}
                                        className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                                      >
                                        <RefreshCw className="h-4 w-4" />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Regenerate</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Generated by: {item.model}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 italic">&quot;{item.critique}&quot;</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex space-x-2">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleLike(item.id)}
                                        aria-label={`Like ${item.name}`}
                                        className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                                      >
                                        <ThumbsUp className="h-4 w-4 mr-1" />
                                        <span>{item.likes}</span>
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Like this name</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>

                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleDislike(item.id)}
                                        aria-label={`Dislike ${item.name}`}
                                        className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                                      >
                                        <ThumbsDown className="h-4 w-4 mr-1" />
                                        <span>{item.dislikes}</span>
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Dislike this name</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>

                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => toggleFavorite(item.id)}
                                        aria-label={item.isFavorite ? `Remove ${item.name} from favorites` : `Add ${item.name} to favorites`}
                                        className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                                      >
                                        <Star className={`h-4 w-4 ${item.isFavorite ? 'text-yellow-500 fill-yellow-500' : ''}`} />
                                      </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleCopy(item.name, item.id)}
                                      aria-label={`Copy ${item.name} to clipboard`}
                                      className="px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
                                    >
                                      {copiedStates[item.id] ? (
                                        <Check className="h-4 w-4 text-green-500" />
                                      ) : (
                                        <Copy className="h-4 w-4" />
                                      )}
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{copiedStates[item.id] ? 'Copied!' : 'Copy to clipboard'}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white dark:bg-gray-900 bg-opacity-90 shadow-md mt-8 transition-colors duration-200">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0" style={{ lineHeight: '1.6', letterSpacing: '0.01em' }}>© 2023 NicheNamer. All rights reserved.</p>
          <nav className="space-x-4">
            <Link href="/about" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
              About
            </Link>
            <Link href="/terms" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}