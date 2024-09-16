'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Zap, Lightbulb, Shield, Rocket } from "lucide-react"
import { useRouter } from 'next/navigation'

export function AboutPage() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600 p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center">
            <Zap className="mr-2 h-8 w-8 text-blue-500" />
            About NicheNamer
          </CardTitle>
          <CardDescription className="text-center text-lg">Unleash Your Brand's Potential with AI-Powered Naming</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            NicheNamer is an innovative AI-powered tool designed to help entrepreneurs, marketers, and creatives generate unique and compelling business names tailored to their specific industry or niche.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Lightbulb className="mr-2 h-6 w-6 text-yellow-500" />
              Our Mission
            </h3>
            <p>
              We aim to simplify the often challenging process of naming a business by leveraging cutting-edge AI technology to generate creative, relevant, and memorable name suggestions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Shield className="mr-2 h-6 w-6 text-green-500" />
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AI-powered name generation based on your industry or product type</li>
              <li>Multiple AI models for diverse and creative suggestions</li>
              <li>Instant feedback and critiques for each generated name</li>
              <li>Ability to like, dislike, and favorite name suggestions</li>
              <li>Easy sharing and collaboration options</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center">
              <Rocket className="mr-2 h-6 w-6 text-purple-500" />
              Get Started
            </h3>
            <p>
              Whether you're launching a new startup, rebranding your existing business, or simply exploring potential names for a project, NicheNamer is here to inspire and assist you in finding the perfect name that resonates with your target audience and encapsulates your brand's essence.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => router.push('/')} className="text-lg">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}