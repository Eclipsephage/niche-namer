'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Loader2, ThumbsUp, ThumbsDown, Copy, Check, Zap, Sparkles, Search } from "lucide-react"
import Link from 'next/link'

export function NicheNamer() {
  const [industry, setIndustry] = useState('')
  const [generatedNames, setGeneratedNames] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [copiedStates, setCopiedStates] = useState({})

  const generateNames = () => {
    setIsLoading(true)
    // Simulating API call with setTimeout
    setTimeout(() => {
      const names = [
        `${industry} Innovators`,
        `${industry} Pioneers`,
        `${industry} Nexus`,
        `${industry} Pulse`,
        `${industry} Forge`,
        `${industry} Horizon`
      ]
      setGeneratedNames(names.map(name => ({ name, likes: 0, dislikes: 0 })))
      setIsLoading(false)
    }, 1500)
  }

  const handleLike = (index) => {
    const updatedNames = [...generatedNames]
    updatedNames[index].likes += 1
    setGeneratedNames(updatedNames)
  }

  const handleDislike = (index) => {
    const updatedNames = [...generatedNames]
    updatedNames[index].dislikes += 1
    setGeneratedNames(updatedNames)
  }

  const handleCopy = (name, index) => {
    navigator.clipboard.writeText(name).then(() => {
      setCopiedStates(prev => ({ ...prev, [index]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [index]: false }))
      }, 2000)
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-700 via-gray-500 to-gray-300">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
        .small-caps {
          font-variant: small-caps;
        }
      `}</style>
      <header className="bg-white bg-opacity-90 shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0 flex items-center tracking-wider">
            <Zap className="mr-2 h-8 w-8 text-gray-600" />
            <span className="font-bold tracking-widest small-caps">NicheNamer</span>
          </h1>
          <nav>
            <Link href="#" className="text-gray-700 hover:text-gray-900 mx-2 sm:ml-4 flex items-center transition-colors duration-200">
              <Sparkles className="mr-1 h-4 w-4" />
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 mx-2 sm:ml-4 flex items-center transition-colors duration-200">
              <Lightbulb className="mr-1 h-4 w-4" />
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-2 leading-tight">Generate Unique Business Names</CardTitle>
            <CardDescription className="text-center text-gray-600 font-medium text-lg">Enter your industry and let AI create perfect names for you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your industry or product type"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full text-base sm:text-lg py-3 pl-10 pr-4 border-2 border-gray-300 focus:border-gray-500 rounded-lg shadow-sm transition-all duration-200 placeholder-gray-400"
                  style={{ lineHeight: '1.6', letterSpacing: '0.01em' }}
                />
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      onClick={generateNames} 
                      disabled={!industry || isLoading}
                      className="w-full h-14 sm:h-16 text-lg sm:text-xl font-medium text-white bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 hover:brightness-110 rounded-lg shadow-md"
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
            </div>
            {generatedNames.length > 0 && (
              <div className="space-y-4 mt-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Generated Names:</h3>
                {generatedNames.map((item, index) => (
                  <Card key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <CardContent className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-base sm:text-lg text-gray-800 font-medium" style={{ lineHeight: '1.6', letterSpacing: '0.01em' }}>{item.name}</span>
                        <Badge variant="secondary" className="text-xs bg-gray-200 text-gray-700">
                          AI Generated
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleLike(index)}
                                aria-label="Like"
                                className="px-2 py-1 hover:bg-gray-200 transition-colors duration-200"
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
                                onClick={() => handleDislike(index)}
                                aria-label="Dislike"
                                className="px-2 py-1 hover:bg-gray-200 transition-colors duration-200"
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
                                onClick={() => handleCopy(item.name, index)}
                                aria-label="Copy to clipboard"
                                className="px-2 py-1 hover:bg-gray-200 transition-colors duration-200"
                              >
                                {copiedStates[index] ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{copiedStates[index] ? 'Copied!' : 'Copy to clipboard'}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white bg-opacity-90 shadow-md mt-8">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-2 sm:mb-0" style={{ lineHeight: '1.6', letterSpacing: '0.01em' }}>© 2023 NicheNamer. All rights reserved.</p>
          <nav className="space-x-4">
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">About</Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}